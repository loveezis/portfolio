package plan;

import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class LoginModel {
	String name = "";
	String tel = "";
	Boolean login(String id, String pass) {
		Boolean result = false;
		try {
			MessageDigest md = MessageDigest.getInstance("MD5");
			md.update(pass.getBytes("utf-8"));
			byte[] code = md.digest();
			StringBuilder sb = new StringBuilder();
			 for(byte b : code){
			 	String repass = String.format("%02x",b);
			 	sb.append(repass);
			}
			
			 Connection con = DbConfig.info();
			 String sql = "select * from camp_member where mid=? and mpass=?";
			 PreparedStatement ps = con.prepareStatement(sql);
			 ps.setString(1, id);
			 ps.setString(2, sb.toString());
			 
			 ResultSet rs = ps.executeQuery();
			 while(rs.next()) {
				 this.name = rs.getString("mname");
				 this.tel = rs.getString("mtel");
				 result = true;
			 }
			 rs.close();
			 ps.close();
			 con.close();
		}catch(Exception e) {
			System.out.println("로그인 오류 : "+e);
		}
		return result;
	}
	
	String username() {
		return this.name;
	}
	String usertel() {
		return this.tel;
	}
}
