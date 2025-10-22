from django.db import migrations, connection

def noop(apps, schema_editor):
    pass

class Migration(migrations.Migration):
    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = []

    if connection.vendor == "postgresql":
        operations = [
            migrations.RunSQL(
                sql="""CREATE OR REPLACE VIEW v_weekly_mq_points AS ...""",
                reverse_sql="DROP VIEW IF EXISTS v_weekly_mq_points CASCADE;"
            ),
            migrations.RunSQL(
                sql="""CREATE OR REPLACE FUNCTION fn_week_level(total_points NUMERIC) RETURNS VARCHAR AS $$ BEGIN ... END; $$ LANGUAGE plpgsql IMMUTABLE;""",
                reverse_sql="DROP FUNCTION IF EXISTS fn_week_level(NUMERIC);"
            ),
            migrations.RunSQL(
                sql="""CREATE OR REPLACE PROCEDURE sp_upsert_scoreboard(p_cycle_id INT) LANGUAGE plpgsql AS $$ BEGIN ... END; $$;""",
                reverse_sql="DROP PROCEDURE IF EXISTS sp_upsert_scoreboard(INT);"
            ),
        ]
    else:
        operations = [migrations.RunPython(noop)]
