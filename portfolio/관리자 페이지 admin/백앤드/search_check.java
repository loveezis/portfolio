package admin;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.dbcp.BasicDataSource;
import org.json.simple.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class search_check {

	@Autowired
	BasicDataSource dataSource;

	@RequestMapping("/admin/search_check_api.do")
	@ResponseBody
	public String api_server(HttpServletRequest request) {
	    String result = ""; // 배열 데이터를 최종적으로 이용하는 변수
	    
	    String data1 = request.getParameter("search");
	    String array[] = data1.split(",");
	    try {
	        Connection con = dataSource.getConnection();
	        String sql = "select * from member_join where ";
	        if (array[0].equals("userid")) {
	            sql += "userid like '%" + array[1] + "%'";
	        } else if (array[0].equals("username")) {
	            sql += "username like '%" + array[1] + "%'";
	        } else if (array[0].equals("phone")) {
	            sql += "phone like '%" + array[1] + "%'";
	        }
	        sql += " order by idx desc";
	        
	        PreparedStatement ps = con.prepareStatement(sql);
	        ResultSet rs = ps.executeQuery();
	        
	        JSONArray ja = new JSONArray();
	        while (rs.next()) {
	            JSONArray jb = new JSONArray();
	            jb.add(rs.getString("userid"));
	            jb.add(rs.getString("username"));
	            jb.add(rs.getString("phone"));
	            jb.add(rs.getString("telephone"));
	            jb.add(rs.getString("level"));
	            jb.add(rs.getString("point"));
	            jb.add(rs.getString("last_login_date"));
	            jb.add(rs.getString("registration_date"));
	            jb.add(rs.getString("email_subscription"));
	            jb.add(rs.getString("sms_subscription"));
	        	jb.add(rs.getString("is_dormant"));
	            ja.add(jb);
	        }
	        result = ja.toString();
	        
	        con.close();
	        ps.close();
	    } catch (Exception e) {
	        e.printStackTrace();
	        result = "error:32";
	    }
	    return result;
	}
}

