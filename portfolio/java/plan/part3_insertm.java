package plan;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.Arrays;

public class part3_insertm {

	DbConfig db = new DbConfig();
	
	public String insert(String[] info) throws Exception {
		
		Connection con = DbConfig.info();
		String sql = "insert into camp values ('0',?,?,?,?,?,?,?,?,?,?,?,?,?);";
		PreparedStatement ps = con.prepareStatement(sql);
		ps.setString(1, info[0]);
		ps.setString(2, info[1]);
		ps.setString(3, info[2]);
		ps.setString(4, info[3]);
		ps.setString(5, info[4]);
		ps.setString(6, info[5]);
		ps.setString(7, info[6]);
		ps.setString(8, info[7]);
		ps.setString(9, info[8]);
		ps.setString(10, info[9]);
		ps.setString(11, info[10]);
		ps.setString(12, info[11]);
		ps.setString(13, info[12]);
		
		int call = ps.executeUpdate();
		String msg = "no";
		if(call > 0) {
			msg = "ok";
		}
		
		con.close();
		ps.close(); 
		
		return msg;
	}
	
}
