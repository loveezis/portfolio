package admin;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class idcheck_sub {
	
	database db = new database();
	PreparedStatement pd;
	public String checkid(String mid) throws Exception{
		
		Connection con = db.info(); //데이터 베이스 연결
		String select = "select * from master_join where mid=?";
		this.pd = con.prepareStatement(select);
		
		pd.setString(1, mid);
		
		String msg = "";
		ResultSet rs = null;
		rs = pd.executeQuery();	
		if(rs.next() == true) {
			msg = "no";
		}
		else {
			msg = "use";
		}
		pd.close();
		rs.close();
		return msg;
	}
}
