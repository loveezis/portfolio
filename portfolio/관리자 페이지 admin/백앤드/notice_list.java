package admin;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.dbcp.BasicDataSource;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class notice_list {

	@Autowired
	BasicDataSource dataSource;

	@RequestMapping("/admin/notice_list_api.do")
	public void notice_check(Model m, HttpServletRequest request) {
	    String result = ""; // 배열 데이터를 최종적으로 이용하는 변수
	    String sign = request.getParameter("keys");
	    String p = request.getParameter("page");
	    int page = Integer.parseInt(p);

	    // front-end에 넘어가는 key값

	    if (sign.equals("notice_ok")) {
	        try {
	            Connection con = dataSource.getConnection();            
	            
	            String sql1 = "SELECT COUNT(*) AS ea FROM notice_list";
	            PreparedStatement ps1 = con.prepareStatement(sql1);
	            ResultSet rs1 = ps1.executeQuery();

	            String ea = "";
	            while (rs1.next()) {
	                ea = rs1.getString("ea");  // 총 갯수 갖고오는 변수
	            }
	            rs1.close();
	            String sql2 = "";
	            if(page > 0) {
	            	sql2 = "SELECT * FROM notice_list ORDER BY idx DESC LIMIT ?, 10";	
	            	
	            }
	            else {
	            	sql2 = "SELECT * FROM notice_list ORDER BY idx DESC LIMIT ?, 10";
	            }
	            PreparedStatement ps2 = con.prepareStatement(sql2);
	            ps2.setInt(1, page);
	            ResultSet rs2 = ps2.executeQuery();

	            // json 배열 생성
	            JSONArray ja = new JSONArray();

	            while (rs2.next()) {
	                // 키값 + 원시배열생성
	                JSONArray jb = new JSONArray();
	                jb.add(rs2.getString("nt_yn"));
	                jb.add(rs2.getString("idx"));
	                jb.add(rs2.getString("nt_subject"));
	                jb.add(rs2.getString("nt_writer"));
	                jb.add(rs2.getString("nt_date"));
	                jb.add(rs2.getString("click_count"));
	                ja.add(jb);
	            }

	            JSONObject jb2 = new JSONObject();
	            jb2.put("arr", ja);
	            jb2.put("key", ea);
	            result = jb2.toString();
	            m.addAttribute("result", result);

	            con.close();
	            ps1.close();
	            ps2.close();
	            rs1.close();
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
