DROP FUNCTION get_best_player(character varying, character varying, character varying, integer);

CREATE FUNCTION get_best_player(player_name1 VARCHAR, player_name2 VARCHAR, player_name3 VARCHAR, week_number INT)
RETURNS VARCHAR AS $$
DECLARE
  player_data RECORD;
  best_player_name VARCHAR;
BEGIN
  SELECT INTO best_player_name
  player_name
  FROM get_multiple_player_data(player_name1, player_name2, player_name3, week_number)
  ORDER BY position_rank ASC, avg_fantasy_points DESC
  LIMIT 1;

  RETURN best_player_name;
END;
$$ LANGUAGE plpgsql;

-- SELECT * FROM get_best_player('Najee Harris', 'Nick Chubb', 'Bijan Robinson', 1);
-- SELECT * FROM get_best_player('Chris Olave', 'Calvin Ridley', 'Tee Higgins', 1);
-- SELECT * FROM get_best_player('Saquon Barkley', 'Tony Pollard', 'Stefon Diggs', 1);
-- SELECT * FROM get_best_player('Aaron Rodgers', 'Patrick Mahomes', 'Justin Herbert', 1);
SELECT * FROM get_best_player('Kyle Pitts', 'TJ Hockenson', 'Darren Waller', 1);