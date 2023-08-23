CREATE OR REPLACE FUNCTION get_average_fantasy_points(opponent_name VARCHAR, player_position VARCHAR)
RETURNS NUMERIC AS $$
DECLARE
  avg_fantasy_points NUMERIC;
BEGIN
  IF player_position = 'QB' THEN -- Change this line to 'QB'
    SELECT qb_avg_pts INTO avg_fantasy_points FROM position_ranks WHERE Team = opponent_name;
  ELSIF player_position = 'RB' THEN -- Change this line to 'RB'
    SELECT rb_avg_pts INTO avg_fantasy_points FROM position_ranks WHERE Team = opponent_name;
  ELSIF player_position = 'WR' THEN -- Change this line to 'WR'
    SELECT wr_avg_pts INTO avg_fantasy_points FROM position_ranks WHERE Team = opponent_name;
  ELSIF player_position = 'TE' THEN -- Change this line to 'TE'
    SELECT te_avg_pts INTO avg_fantasy_points FROM position_ranks WHERE Team = opponent_name;
  ELSIF player_position = 'K' THEN -- Change this line to 'K'
    SELECT k_avg_pts INTO avg_fantasy_points FROM position_ranks WHERE Team = opponent_name;
  ELSIF player_position = 'DST' THEN -- Change this line to 'DST'
    SELECT dst_avg_pts INTO avg_fantasy_points FROM position_ranks WHERE Team = opponent_name;
  END IF;
  RETURN avg_fantasy_points;
END;
$$ LANGUAGE plpgsql;



SELECT get_average_fantasy_points('PHI', 'QB');