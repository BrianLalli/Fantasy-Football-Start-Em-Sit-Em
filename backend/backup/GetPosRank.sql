CREATE OR REPLACE FUNCTION get_position_rank(opponent_name VARCHAR, player_position VARCHAR)
RETURNS INT AS $$
DECLARE
  position_rank INT;
BEGIN
  IF player_position = 'QB' THEN
    SELECT qb_rank INTO position_rank FROM position_ranks WHERE Team = opponent_name;
  ELSIF player_position = 'RB' THEN
    SELECT rb_rank INTO position_rank FROM position_ranks WHERE Team = opponent_name;
  ELSIF player_position = 'WR' THEN
    SELECT wr_rank INTO position_rank FROM position_ranks WHERE Team = opponent_name;
  ELSIF player_position = 'TE' THEN
    SELECT te_rank INTO position_rank FROM position_ranks WHERE Team = opponent_name;
  ELSIF player_position = 'K' THEN
    SELECT k_rank INTO position_rank FROM position_ranks WHERE Team = opponent_name;
  ELSIF player_position = 'DST' THEN
    SELECT dst_rank INTO position_rank FROM position_ranks WHERE Team = opponent_name;
  END IF;
  RETURN position_rank;
END;
$$ LANGUAGE plpgsql;


SELECT get_position_rank('PHI', 'QB');
