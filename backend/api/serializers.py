from rest_framework import serializers
from .models import (
    Cohort,
    User,
    Cycle,
    Week,
    Goal,
    WeeklyPlan,
    DailyLog,
    Scoreboard,
    Archive,
)


class CohortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cohort
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class CycleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cycle
        fields = "__all__"


class WeekSerializer(serializers.ModelSerializer):
    class Meta:
        model = Week
        fields = "__all__"


class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = "__all__"


class WeeklyPlanSerializer(serializers.ModelSerializer):
    execution_percent = serializers.FloatField(read_only=True)  # computed property

    class Meta:
        model = WeeklyPlan
        fields = "__all__"


class DailyLogSerializer(serializers.ModelSerializer):
    life_total = serializers.FloatField(read_only=True)
    leadership_total = serializers.FloatField(read_only=True)
    legacy_total = serializers.FloatField(read_only=True)
    daily_total = serializers.FloatField(read_only=True)

    class Meta:
        model = DailyLog
        fields = "__all__"


class ScoreboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scoreboard
        fields = "__all__"


class ArchiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Archive
        fields = "__all__"
