-- Drop old function if it exists
DROP FUNCTION IF EXISTS get_best_player(character varying, character varying, integer);

-- Create new function
CREATE FUNCTION get_best_player(player_name1 VARCHAR, player_name2 VARCHAR, week_number INT)
RETURNS VARCHAR AS $$
DECLARE
  best_player_name VARCHAR;
BEGIN
  SELECT INTO best_player_name
  player_name
  FROM get_multiple_player_data(player_name1, player_name2, week_number)
  ORDER BY position_rank ASC, avg_fantasy_points DESC
  LIMIT 1;

  RETURN best_player_name;
END;
$$ LANGUAGE plpgsql;

-- Test the new function
SELECT * FROM get_best_player('Chris Olave', 'Tee Higgins', 1);
