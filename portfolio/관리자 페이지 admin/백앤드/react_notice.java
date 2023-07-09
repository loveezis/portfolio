package admin;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.dbcp.BasicDataSource;
import org.json.simple.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class react_notice {
	@Autowired
	BasicDataSource dataSource;
	
	@RequestMapping("/admin/react_notice_api.do")
	public void notice_check(Model m, HttpServletRequest request)throws Exception {
//		response.addHeader("Access-Control-Allow-Origin", "*");
//		response.addHeader("Access-Control-Allow-Credentials", "true");
		String sign = request.getParameter("keys");
		String p = request.getParameter("page");
		int page = Integer.parseInt(p);
		String result = "";
		
	    // front-end에 넘어가는 key값

	    if (sign.equals("notice_ok")) {
	        try {
	            Connection con = dataSource.getConnection();            
	            PreparedStatement ps2 = null;
	            String sql = "SELECT nt_subject,Date(nt_date) as date FROM notice_list ORDER BY idx DESC LIMIT ?,5";
	            ps2 = con.prepareStatement(sql);
	            ps2.setInt(1, page);
	            ResultSet rs2 = ps2.executeQuery();

	            // json 배열 생성
	            JSONArray ja = new JSONArray();

	            while (rs2.next()) {
	                // 키값 + 원시배열생성
	                JSONArray jb = new JSONArray();
	                jb.add(rs2.getString("nt_subject"));
	                jb.add(rs2.getString("date"));
	                ja.add(jb);
	            }
	            result = ja.toString();
	            m.addAttribute("result", result);

	            con.close();
	            ps2.close();
	            rs2.close();
	        } catch (Exception e) {
	            e.printStackTrace();
	            // 에러 메시지 반환
	            m.addAttribute("result", "error : 키값 오류");
	        }
	    } else {
	        // 해당 키값이 맞지 않을 경우 에러 메시지
	        m.addAttribute("result", "error : 32");
	    }
	}
}
