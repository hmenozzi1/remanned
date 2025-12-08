from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from . import auth_views  # ← ADD THIS LINE

router = DefaultRouter()
router.register(r'cohorts', views.CohortViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'cycles', views.CycleViewSet)
router.register(r'weeks', views.WeekViewSet)
router.register(r'goals', views.GoalViewSet)
router.register(r'weekly-plans', views.WeeklyPlanViewSet)
router.register(r'daily-logs', views.DailyLogViewSet)
router.register(r'scoreboards', views.ScoreboardViewSet)
router.register(r'archives', views.ArchiveViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # ADD THESE 4 LINES ↓
    path('auth/login/', auth_views.login_view, name='login'),
    path('auth/register/', auth_views.register_view, name='register'),
    path('auth/logout/', auth_views.logout_view, name='logout'),
    path('auth/me/', auth_views.current_user_view, name='current-user'),
]