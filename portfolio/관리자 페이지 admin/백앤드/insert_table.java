package admin;

import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.PreparedStatement;

import org.json.simple.JSONObject;


public class insert_table {

	database db = new database();
	PreparedStatement pd;

	JSONObject ob = new JSONObject();
	public String insert(String mid,String mpass,String mname,String memail,String mtel,String mteam1,String mteam2) throws Exception{
		
		try {
			MessageDigest md = MessageDigest.getInstance("MD5");
			md.update(mpass.getBytes("utf-8"));
			byte[] code = md.digest();
			StringBuilder sb = new StringBuilder();
			for(byte b : code) {
				String repass = String.format("%02x",b);
				sb.append(repass);
			}
			Connection con = this.db.info();
			String insert = "insert into master_join values('0',?,?,?,?,?,?,?,default,default)";
			pd = con.prepareStatement(insert);
		
			pd.setString(1, mid);
			pd.setString(2, sb.toString());
			pd.setString(3, mname);
			pd.setString(4, memail);
			pd.setString(5, mtel);
			pd.setString(6, mteam1);
			pd.setString(7, mteam2);
			
			int call = pd.executeUpdate();
			String msg = "";
			if(call > 0){
				msg = "ok";
			}
			else {
				msg = "no";
			}
			return msg;
			
		} catch (Exception e) {
			e.printStackTrace();
			
		}
		return null;
	}
}
