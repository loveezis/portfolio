package admin;

import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class logincheck {

	database db = new database();
	PreparedStatement ps;
	public String login_check(String loginId,String loginPw) throws Exception {
		
		
			try {
				MessageDigest md = MessageDigest.getInstance("MD5");
				md.update(loginPw.getBytes("utf-8"));
				byte[] code = md.digest();
				StringBuilder sb = new StringBuilder();
				for(byte b : code) {
					String repass = String.format("%02x",b);
					sb.append(repass);
				}
				Connection con = db.info();
				String sql = "select * from master_join where mid=? and mpass=?";
				this.ps = con.prepareStatement(sql);
				
				this.ps.setString(1, loginId);
				this.ps.setString(2, sb.toString());
				
				String admincheck = "";
				ResultSet rs = null;
				rs = ps.executeQuery();
				String msg = "";
				if(rs.next() == true) {
					msg = "use";
					admincheck = rs.getString("admincheck");
				}
				else {
					msg = "no";
				}
			
			return msg+","+admincheck;
				
				
			} catch (Exception e) {
				e.printStackTrace();
			}
			return null;
	}
}
