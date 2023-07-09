package plan;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class part4_nook {

	DbConfig abc = new DbConfig();
	
	public ArrayList<String> part4noo(String part4no) throws Exception{
		//System.out.println(part4no);
		
		Connection con = this.abc.info();
	
		String sql = "select * from camp where ccode=?;";
		PreparedStatement ps = con.prepareStatement(sql);
		ps.setString(1, part4no);
		
		ResultSet rs = ps.executeQuery();
		String msg = "no";
		ArrayList<String> al= new ArrayList();

		while(rs.next()) { 
			al.add(rs.getString("carea"));
			al.add(rs.getString("cindate"));
			al.add(rs.getString("cpart"));
			al.add(rs.getString("cmoney"));
			al.add(rs.getString("cname"));
			al.add(rs.getString("ctel"));
			al.add(rs.getString("cperson"));
			al.add(rs.getString("ccode"));
			al.add(rs.getString("cpay"));
			al.add(rs.getString("cpayok"));
			al.add(rs.getString("coutdate"));
			al.add(rs.getString("cpartno"));
			msg = "ok";
			al.add(msg);
		}
		con.close();
		ps.close();

		return al;
		
	}
}
