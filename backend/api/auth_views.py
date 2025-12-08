# api/auth_views.py
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import User
from .serializers import UserSerializer


@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    """
    Login endpoint - validates email and returns user data
    
    POST /api/auth/login/
    Body: {"email": "user@example.com", "password": "password"}
    
    Returns: {
        "token": "user-{id}",
        "user": {...user_data}
    }
    """
    email = request.data.get('email')
    password = request.data.get('password')
    
    if not email or not password:
        return Response(
            {'message': 'Email and password are required'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    try:
        # Find user by email
        user = User.objects.get(email=email)
        
        # For now, accept any password (TODO: add proper password authentication)
        # In production, you'd check password against a hashed password field
        # Example: if not check_password(password, user.password):
        #              return Response({'message': 'Invalid credentials'}, 401)
        
        # Return user data with simple token
        user_data = UserSerializer(user).data
        
        return Response({
            'token': f'user-{user.user_id}',  # Simple token for development
            'user': user_data
        }, status=status.HTTP_200_OK)
        
    except User.DoesNotExist:
        return Response(
            {'message': 'Invalid email or password'},
            status=status.HTTP_401_UNAUTHORIZED
        )


@api_view(['POST'])
@permission_classes([AllowAny])
def register_view(request):
    """
    Register endpoint - creates new user
    
    POST /api/auth/register/
    Body: {
        "name": "John Doe",
        "email": "john@example.com",
        "cohort": 1  # optional
    }
    
    Returns: {
        "token": "user-{id}",
        "user": {...user_data}
    }
    """
    serializer = UserSerializer(data=request.data)
    
    if serializer.is_valid():
        user = serializer.save()
        
        return Response({
            'token': f'user-{user.user_id}',
            'user': UserSerializer(user).data
        }, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def logout_view(request):
    """
    Logout endpoint - currently just returns success
    In production, would invalidate token
    
    POST /api/auth/logout/
    
    Returns: {
        "message": "Logged out successfully"
    }
    """
    return Response({
        'message': 'Logged out successfully'
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
def current_user_view(request):
    """
    Get current user info from token
    
    GET /api/auth/me/
    Headers: Authorization: Bearer user-{user_id}
    
    Returns: {...user_data}
    """
    # Extract user_id from Authorization header
    auth_header = request.headers.get('Authorization', '')
    
    if auth_header.startswith('Bearer user-'):
        user_id = auth_header.replace('Bearer user-', '')
        
        try:
            user = User.objects.get(user_id=int(user_id))
            return Response(UserSerializer(user).data, status=status.HTTP_200_OK)
        except (User.DoesNotExist, ValueError):
            return Response(
                {'message': 'Invalid token'},
                status=status.HTTP_401_UNAUTHORIZED
            )
    
    return Response(
        {'message': 'No token provided'},
        status=status.HTTP_401_UNAUTHORIZED
    )