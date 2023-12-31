package plan;

import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class JoinModel {
	int doJoin(String id, String pass, String name, String tel, String email, String sms, String ad) {
		int result = 0;
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
			String sql = "insert into camp_member values('0',?,?,?,?,?,default,?,?)";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, id);
			ps.setString(2, sb.toString());
			ps.setString(3, name);
			ps.setString(4, tel);
			ps.setString(5, email);
			ps.setString(6, sms);
			ps.setString(7, ad);
			
			result = ps.executeUpdate();
			ps.close();
		}catch(Exception e) {
			System.out.println("회원가입오류 : "+e);
		}
		return result;
	}
}
