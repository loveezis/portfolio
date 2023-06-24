package plan;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class JoinCkModel {
	String check(String mid)throws Exception {
		String result = "";
		try {
			Connection con = DbConfig.info();
			String sql = "select * from camp_member where mid=?";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, mid);
			ResultSet rs = ps.executeQuery();
			
			if(rs.next() == true) {
				result = "no";
			}
			else {
				result = "use";
			}
			ps.close();
			con.close();
		}catch(Exception e) {
			System.out.println("아이디 중복체크 오류"+e);
		}
		return result;
	}
}
