from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

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
]