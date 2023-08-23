CREATE OR REPLACE FUNCTION get_player_data(player_name VARCHAR, week_number INT)
RETURNS player_data AS $$
DECLARE
  team_name VARCHAR;
  player_position VARCHAR;
  opponent_name VARCHAR;
  avg_fantasy_points NUMERIC;
  position_rank INT; -- added this line to declare the variable
  result player_data;
BEGIN
  SELECT get_player_team(player_name) INTO team_name;
  SELECT get_player_position(player_name) INTO player_position;
  SELECT get_current_week_opponent(team_name, week_number) INTO opponent_name;
  SELECT get_average_fantasy_points(opponent_name, player_position) INTO avg_fantasy_points;
  SELECT get_position_rank(opponent_name, player_position) INTO position_rank; -- added this line to get the position rank

  result := (player_name, team_name, player_position, opponent_name, avg_fantasy_points, position_rank)::player_data; -- included the player_name and position rank in the result
  RETURN result;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM get_player_data('Najee Harris', 1);