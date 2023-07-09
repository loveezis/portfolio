package admin;

import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.dbcp.BasicDataSource;
import org.json.simple.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class configList_api {

	@Autowired
	BasicDataSource dataSource;

	@RequestMapping("/admin/configList_api.do")
	public String configSetting(HttpServletRequest request, HttpServletResponse response) throws Exception {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		String sql = "";
		String result = "";
		
		Connection con = dataSource.getConnection();
		PreparedStatement ps;
		sql = "select * from config_setting";
		ps = con.prepareStatement(sql);
		JSONArray ja = new JSONArray();

		ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				JSONArray ja2 = new JSONArray();
				ja.add(rs.getString("homename"));
				ja.add(rs.getString("adminemail"));
				ja.add(rs.getString("point_yn"));
				ja.add(rs.getString("joinpoint"));
				ja.add(rs.getString("joinlevel"));
				ja.add(rs.getString("companyname"));
				ja.add(rs.getString("companynumber"));
				ja.add(rs.getString("companyboss"));
				ja.add(rs.getString("companytel"));
				ja.add(rs.getString("comtel"));
				ja.add(rs.getString("comnumber"));
				ja.add(rs.getString("companypost"));
				ja.add(rs.getString("companyaddr"));
				ja.add(rs.getString("mastername"));
				ja.add(rs.getString("masteremail"));
				ja.add(rs.getString("bankname"));
				ja.add(rs.getString("banknumber"));
				ja.add(rs.getString("card_yn"));
				ja.add(rs.getString("tel_yn"));
				ja.add(rs.getString("book_yn"));
				ja.add(rs.getString("minpoint"));
				ja.add(rs.getString("maxpoint"));
				ja.add(rs.getString("cash_yn"));
				ja.add(rs.getString("deliveryname"));
				ja.add(rs.getString("deliverymoney"));
				ja.add(rs.getString("deliverydate"));
				ja.add(ja2);
			}
			result = ja.toString();
			PrintWriter out = response.getWriter();
			out.print(result);
			con.close();
			rs.close();
			ps.close();
			return null;
	}
}












