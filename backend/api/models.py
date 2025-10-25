from django.db import models


# ------------------------
# ENUMS as Django choices
# ------------------------
class DomainEnum(models.TextChoices):
    LIFE = "Life", "Life"
    LEADERSHIP = "Leadership", "Leadership"
    LEGACY = "Legacy", "Legacy"


class CycleStatusEnum(models.TextChoices):
    ACTIVE = "Active", "Active"
    ARCHIVED = "Archived", "Archived"


class LevelEnum(models.TextChoices):
    UNSTABLE = "Unstable", "Unstable"
    SURVIVOR = "Survivor", "Survivor"
    PERFORMER = "Performer", "Performer"
    UNSHAKABLE = "Unshakable", "Unshakable"


class LearnLeverageEnum(models.TextChoices):
    LEARN = "Learn", "Learn"
    LEVERAGE = "Leverage", "Leverage"


# ------------------------
# Tables
# ------------------------

class Cohort(models.Model):
    cohort_id = models.AutoField(primary_key=True)
    name = models.TextField(unique=True)

    def __str__(self):
        return self.name


class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    name = models.TextField()
    email = models.EmailField(unique=True)
    cohort = models.ForeignKey(Cohort, null=True, blank=True, on_delete=models.SET_NULL)
    join_date = models.DateField(auto_now_add=True)
    current_level = models.CharField(
        max_length=20, choices=LevelEnum.choices, null=True, blank=True
    )

    def __str__(self):
        return self.name


class Cycle(models.Model):
    cycle_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.CharField(
        max_length=20, choices=CycleStatusEnum.choices, default=CycleStatusEnum.ACTIVE
    )

    class Meta:
        constraints = [
            models.CheckConstraint(
                check=models.Q(end_date__gt=models.F("start_date")),
                name="check_cycle_dates",
            )
        ]


class Week(models.Model):
    week_id = models.AutoField(primary_key=True)
    cycle = models.ForeignKey(Cycle, on_delete=models.CASCADE)
    week_number = models.IntegerField()
    starts_on = models.DateField()
    ends_on = models.DateField()

    class Meta:
        unique_together = ("cycle", "week_number")
        constraints = [
            models.CheckConstraint(
                check=models.Q(week_number__gte=1) & models.Q(week_number__lte=12),
                name="check_week_number",
            ),
            models.CheckConstraint(
                check=models.Q(ends_on__gte=models.F("starts_on")),
                name="check_week_dates",
            ),
        ]


class Goal(models.Model):
    goal_id = models.AutoField(primary_key=True)
    cycle = models.ForeignKey(Cycle, on_delete=models.CASCADE)
    domain = models.CharField(max_length=20, choices=DomainEnum.choices)
    goal_statement = models.TextField()
    lag_metric = models.TextField()
    lead_metrics = models.TextField()
    smaart_check = models.BooleanField(default=False)


class WeeklyPlan(models.Model):
    weekly_plan_id = models.AutoField(primary_key=True)
    week = models.ForeignKey(Week, on_delete=models.CASCADE)
    goal = models.ForeignKey(Goal, on_delete=models.CASCADE)
    tactics_planned = models.IntegerField()
    tactics_completed = models.IntegerField()

    class Meta:
        unique_together = ("week", "goal")
        constraints = [
            models.CheckConstraint(
                check=models.Q(tactics_planned__gte=0),
                name="check_tactics_planned_nonneg",
            ),
            models.CheckConstraint(
                check=models.Q(tactics_completed__gte=0)
                & models.Q(tactics_completed__lte=models.F("tactics_planned")),
                name="check_tactics_completed_bounds",
            ),
        ]

    @property
    def execution_percent(self):
        if self.tactics_planned == 0:
            return 0
        return (self.tactics_completed * 100.0) / self.tactics_planned


class DailyLog(models.Model):
    log_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cycle = models.ForeignKey(Cycle, on_delete=models.CASCADE)
    week = models.ForeignKey(Week, null=True, blank=True, on_delete=models.SET_NULL)
    log_date = models.DateField()

    finance = models.DecimalField(max_digits=4, decimal_places=2, default=0)
    fitness = models.DecimalField(max_digits=4, decimal_places=2, default=0)
    fun = models.DecimalField(max_digits=4, decimal_places=2, default=0)
    husband = models.DecimalField(max_digits=4, decimal_places=2, default=0)
    father = models.DecimalField(max_digits=4, decimal_places=2, default=0)
    son = models.DecimalField(max_digits=4, decimal_places=2, default=0)
    business = models.DecimalField(max_digits=4, decimal_places=2, default=0)
    community = models.DecimalField(max_digits=4, decimal_places=2, default=0)
    philanthropy = models.DecimalField(max_digits=4, decimal_places=2, default=0)

    class Meta:
        unique_together = ("user", "log_date")

    @property
    def life_total(self):
        return self.finance + self.fitness + self.fun

    @property
    def leadership_total(self):
        return self.husband + self.father + self.son

    @property
    def legacy_total(self):
        return self.business + self.community + self.philanthropy

    @property
    def daily_total(self):
        return self.life_total + self.leadership_total + self.legacy_total


class Scoreboard(models.Model):
    scoreboard_id = models.AutoField(primary_key=True)
    week = models.OneToOneField(Week, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    life_points = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    leadership_points = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    legacy_points = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    total_points = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    level = models.CharField(
        max_length=20, choices=LevelEnum.choices, null=True, blank=True
    )
    notes = models.TextField(null=True, blank=True)

    class Meta:
        constraints = [
            models.CheckConstraint(
                check=models.Q(total_points__lte=21.00),
                name="check_total_points_max",
            )
        ]


class Archive(models.Model):
    archive_id = models.AutoField(primary_key=True)
    cycle = models.OneToOneField(Cycle, on_delete=models.CASCADE)
    learned_or_leveraged = models.CharField(
        max_length=20, choices=LearnLeverageEnum.choices
    )
    summary = models.TextField(null=True, blank=True)
    archived_date = models.DateField(auto_now_add=True)
