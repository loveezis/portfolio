package plan;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class part4delok {

	DbConfig abc = new DbConfig();
	
	public String deleteok(String ccode) throws Exception {
		
		Connection con = this.abc.info();
		
		String sql = "delete from camp where ccode =?";
		PreparedStatement ps = con.prepareStatement(sql);
		ps.setString(1, ccode);
		int result = ps.executeUpdate();
		String msg = "";
		if(result > 0 ) {
			msg = "ok";
		}
		else {
			msg = "no";
		}
		
		con.close();
		ps.close();
		
		return msg;
		
	}
}
