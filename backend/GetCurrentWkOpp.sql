CREATE OR REPLACE FUNCTION get_current_week_opponent(team_name VARCHAR, week_number INT)
RETURNS VARCHAR AS $$
DECLARE
  opponent VARCHAR;
  week_column_name TEXT := 'week_' || week_number;
BEGIN
  EXECUTE 'SELECT ' || week_column_name || ' FROM schedule WHERE team = $1' INTO opponent USING team_name;
  RETURN opponent;
END;
$$ LANGUAGE plpgsql;

SELECT get_current_week_opponent('PIT', 5);
