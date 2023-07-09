package admin;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.dbcp.BasicDataSource;
import org.json.simple.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class react_product {

	@Autowired
	BasicDataSource dataSource;

	@RequestMapping("/admin/react_product_api.do")
	public void  react_api(Model m, HttpServletRequest request) throws Exception {
		String result = "";
		String sign = "";
		String hot = "";
		sign = request.getParameter("keys").intern();
		if (request.getParameter("hot") != null) {
			hot = request.getParameter("hot");
		}
		String sql = "";
		if (sign.equals("listok")) {
			try {
				Connection con = dataSource.getConnection();
				ResultSet rs;
				PreparedStatement ps;

				if (hot.equals("hotok")) {
					sql = "select * from product_write where pd_bmenu ='5' order by idx desc limit 0,2";	
				}
				else {
					sql = "select * from product_write where pd_bmenu !='5' order by idx desc limit 0,9";
				}
				ps = con.prepareStatement(sql);

				rs = ps.executeQuery();

				JSONArray ja = new JSONArray();
				while (rs.next()) {
					JSONArray jb = new JSONArray();
					jb.add(rs.getString("pd_file1"));
					jb.add(rs.getString("pd_sail"));
					jb.add(rs.getString("pd_name"));
					jb.add(rs.getString("pd_info"));
					jb.add(rs.getString("pd_money"));
					jb.add(rs.getString("pd_price"));
					ja.add(jb);
				}
				// JSONObject JB2 = new JSONObject();
				// JB2.put("data", ja); // JSON 객체에 ja 배열 추가
				result = ja.toString();
				m.addAttribute("result", result);
				con.close();
				ps.close();
			
			} catch (Exception e) {
				e.printStackTrace();
				result = "error:32";
			}
		} else {
			m.addAttribute("result", "error:32");
		}
		
	}

}
