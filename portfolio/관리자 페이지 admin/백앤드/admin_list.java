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
public class admin_list {

	@Autowired
	BasicDataSource dataSource;

	@RequestMapping("/admin/admin_list_api.do")
	public void api_server(Model m, HttpServletRequest request) throws Exception {
		
		String result = ""; //배열 데이터를 최종적으로 이용하는 변수
		String apikey = request.getParameter("keys").intern();
		//front-end에 넘어가는 key값
		if (apikey == "notice_oksigh") {
			//해당 키 값일때만 통과
			// db호출
			try {
				Connection con = dataSource.getConnection();
				String sql = "select * from master_join where admincheck='N' order by idx desc";
				PreparedStatement ps = con.prepareStatement(sql);
				ResultSet rs = ps.executeQuery();
				//json 배열 생성
				JSONArray ja = new JSONArray();
				while (rs.next()) {
					//키값 + 원시배열생성
					JSONArray jb = new JSONArray();
					jb.add(rs.getString("idx"));
					jb.add(rs.getString("mid"));
					jb.add(rs.getString("mname"));
					jb.add(rs.getString("mtel"));
					jb.add(rs.getString("memail"));
					jb.add(rs.getString("mteam1"));
					jb.add(rs.getString("mteam2"));
					jb.add(rs.getString("mdate"));
					jb.add(rs.getString("admincheck"));
					ja.add(jb);
				}
				
				//웹에 문자열로 바로 출력시킴
				result = ja.toString();
				//api.do에서 해당 변수명을 이용해서 값을 불러옴
				m.addAttribute("result", result);
				con.close();
				ps.close();

			} catch (Exception e) {
				e.printStackTrace();
			}
		} else {
			//해당 키값이 맞지 않을경우 에러 메시지
			m.addAttribute("result", "error:32");
		}
	}

}