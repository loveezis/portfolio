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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class bannerList_api {

	@Autowired
	BasicDataSource dataSource;
	
	@ResponseBody
	@RequestMapping("/admin/bannerList_api.do")
	public String bannerList(HttpServletRequest request,HttpServletResponse response) throws Exception {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html; charset=UTF-8");

		
		String keys = request.getParameter("keys");
		String sql1 = "";
		String sql2 = "";
		String sql3 = "";
		String result = "";
		
		if(keys.equals("bannerok")) {
		
			Connection con = dataSource.getConnection();
			PreparedStatement ps;
			sql1 = "select * from mainBanner";
			ps = con.prepareStatement(sql1);
			ResultSet rs1 = ps.executeQuery();
	
			sql2 = "select * from popupBanner";
			ps = con.prepareStatement(sql2);
			ResultSet rs2 = ps.executeQuery();
			
			sql3 = "select * from adBanner";
			ps = con.prepareStatement(sql3);
			ResultSet rs3 = ps.executeQuery();
			
			JSONArray add1 = new JSONArray();
			JSONArray add2 = new JSONArray();
			JSONArray add3 = new JSONArray();

			while(rs1.next()) {
				JSONArray ja1 = new JSONArray();
				ja1.add(rs1.getString("banner1"));
				ja1.add(rs1.getString("banner1Url"));
				ja1.add(rs1.getString("banner2"));
				ja1.add(rs1.getString("banner2Url"));
				ja1.add(rs1.getString("banner3"));
				ja1.add(rs1.getString("banner3Url"));
				add1.add(ja1);
			}
			
			while(rs2.next()) {
				JSONArray ja2 = new JSONArray();
				ja2.add(rs2.getString("p_banner1"));
				ja2.add(rs2.getString("p_banner1Url"));
				ja2.add(rs2.getString("popupUse"));
				add2.add(ja2);
			}
			
			while(rs3.next()) {
				JSONArray ja3 = new JSONArray();
				ja3.add(rs3.getString("adBanner1"));
				ja3.add(rs3.getString("adBanner1Url"));
				ja3.add(rs3.getString("adBanner2"));
				ja3.add(rs3.getString("adBanner2Url"));
				add3.add(ja3);
			}
			
			JSONObject jb = new JSONObject();
			jb.put("main", add1);
			jb.put("pop", add2);
			jb.put("ad", add3);
			
//			PrintWriter out = response.getWriter();
			result = jb.toString();
			
			con.close();
			ps.close();
			rs1.close();
			rs2.close();
			rs3.close();
			
		}
//		return new ResponseEntity<String>(result,HttpStatus.OK);
		return result;
	}
	
}
