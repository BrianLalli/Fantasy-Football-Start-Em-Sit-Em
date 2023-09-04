CREATE OR REPLACE FUNCTION get_player_team(player_name VARCHAR)
RETURNS VARCHAR AS $$
DECLARE
  player_team VARCHAR;
BEGIN
  SELECT team INTO player_team FROM qb_projections WHERE player = player_name
     UNION ALL
  SELECT team FROM rb_projections WHERE player = player_name
     UNION ALL
  SELECT team FROM wr_projections WHERE player = player_name
     UNION ALL
  SELECT team FROM te_projections WHERE player = player_name
     UNION ALL
  SELECT team FROM k_projections WHERE player = player_name
     UNION ALL
  SELECT team FROM dst_projections WHERE player = player_name
     LIMIT 1;
  RETURN player_team;
END;
$$ LANGUAGE plpgsql;

SELECT get_player_team('Cooper Kupp');