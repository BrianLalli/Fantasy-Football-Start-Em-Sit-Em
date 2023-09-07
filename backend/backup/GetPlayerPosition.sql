CREATE OR REPLACE FUNCTION get_player_position(player_name VARCHAR)
RETURNS VARCHAR AS $$
BEGIN
  -- Check each table and return the position if found
  IF EXISTS (SELECT 1 FROM qb_projections WHERE player = player_name) THEN
    RETURN 'QB';
  ELSIF EXISTS (SELECT 1 FROM rb_projections WHERE player = player_name) THEN
    RETURN 'RB';
  ELSIF EXISTS (SELECT 1 FROM wr_projections WHERE player = player_name) THEN
    RETURN 'WR';
  -- Continue with other positions
  END IF;
  RETURN NULL; -- Return NULL if not found
END;
$$ LANGUAGE plpgsql;

SELECT get_player_position('Justin Herbert');