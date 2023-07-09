package admin;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.dbcp.BasicDataSource;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class notice_view {

	@Autowired
	BasicDataSource dataSource;

	@RequestMapping("/admin/notice_view_api.do")
	public void notice_view(Model m, HttpServletRequest request) throws Exception {
		String result = "";
		String keys = request.getParameter("keys");
		String userid = request.getParameter("userid");
		if (keys.equals("view_ok")) {

			try {
				Connection con = dataSource.getConnection();
				
				String update = "UPDATE notice_list SET click_count = click_count + 1 WHERE idx = ?";
				PreparedStatement psupdate = con.prepareStatement(update);
				psupdate.setString(1, userid);
				int rowsAffected = psupdate.executeUpdate();

				psupdate.close();
							
				String sql = "select * from notice_list where idx=?";
				PreparedStatement ps = con.prepareStatement(sql);
				ps.setString(1, userid);
				ResultSet rs = ps.executeQuery();
				
				JSONArray ja = new JSONArray();
				
				while(rs.next()) {
					JSONArray jb = new JSONArray();
					jb.add(rs.getString("nt_date"));
					jb.add(rs.getString("nt_subject"));
					jb.add(rs.getString("nt_writer"));
					jb.add(rs.getString("nt_file"));
					jb.add(rs.getString("ck_area"));
					ja.add(jb);
				}
				JSONObject jo = new JSONObject();
				jo.put("nt_view", ja);
				result = jo.toString();
				m.addAttribute("result",result);
				
				rs.close();
				ps.close();
			} catch (Exception e) {
				e.printStackTrace();
				m.addAttribute("error","db 나 키값이 안맞아");	
			}
		}
		else {
			m.addAttribute("error","키값이 안넘어와");
		}
	}
}
