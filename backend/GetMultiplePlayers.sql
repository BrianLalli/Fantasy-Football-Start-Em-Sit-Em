DROP FUNCTION get_multiple_player_data(character varying, character varying, character varying, integer);


CREATE FUNCTION get_multiple_player_data(player_name1 VARCHAR, player_name2 VARCHAR, player_name3 VARCHAR, week_number INT)
RETURNS TABLE (
  player_name VARCHAR,
  team_name VARCHAR,
  player_position VARCHAR,
  opponent_name VARCHAR,
  avg_fantasy_points NUMERIC,
  position_rank INT
) AS $$
BEGIN
  RETURN QUERY SELECT * FROM get_player_data(player_name1, week_number);
  RETURN QUERY SELECT * FROM get_player_data(player_name2, week_number);
  RETURN QUERY SELECT * FROM get_player_data(player_name3, week_number);
END;
$$ LANGUAGE plpgsql;


SELECT * FROM get_multiple_player_data('Najee Harris', 'Nick Chubb', 'Tony Pollard', 1);
