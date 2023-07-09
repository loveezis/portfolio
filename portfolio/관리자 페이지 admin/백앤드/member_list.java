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
public class member_list {

	@Autowired
	BasicDataSource dataSource;

	@RequestMapping("/admin/member_list_api.do")
	public void apiServer(Model model, HttpServletRequest request) throws Exception {
		String result = ""; // 최종적으로 사용할 배열 데이터 변수
		String sign = request.getParameter("keys").intern();
		String page = request.getParameter("page");
		String mid = "";
		String mname = "";
		String mtel = "";
		
		if(request.getParameter("mid") != null) {
			mid = request.getParameter("mid");
		}else if(request.getParameter("mname") != null) {
			mname = request.getParameter("mname");
		}else if(request.getParameter("mtel") != null) {
			mtel = request.getParameter("mtel");
		}
		
		System.out.println(mid);
		int number = Integer.parseInt(page);
		int ea = 0; // count 값을 저장하는 변수
		
		// front-end에 넘어가는 key값
		if (sign.equals("member_ok")) { // 문자열 비교는 equals() 메서드를 사용해야 합니다.
			
			try {
				Connection con = dataSource.getConnection();
				
				String sql2 = "";
				PreparedStatement ps2 = null;
				ResultSet rs2 = null;
				
				String where = " where ";
				if(mid != "" || mname != "" || mtel != "") {
					if(mid != "") {
						where += "userid like'%"+mid+"%'";
					}else if(mname != "") {
						where += "username like '%"+mname+"%'";
					}else if(mtel != "") {
						where += "phone like '%"+mtel+"%'";
					}
				}else {
					where = "";
				}
					
				
				if (number == 0) {
				    sql2 = "select * from member_join "+where+" order by idx desc limit 0, 5";
				} else {
				    sql2 = "select * from member_join order by idx desc limit ?, 5";
				}
				

				ps2 = con.prepareStatement(sql2);

				if (number != 0) {
				    ps2.setInt(1, number);
				}

				rs2 = ps2.executeQuery();
				
				String sql1 = "select count(*) as ea from member_join"+where;
				PreparedStatement ps1 = con.prepareStatement(sql1);
				ResultSet rs1 = ps1.executeQuery();
				if (rs1.next()) {
					ea = rs1.getInt("ea");
				}
				rs1.close();
				ps1.close();

				// JSON 배열 생성
				JSONArray ja = new JSONArray();
				while (rs2.next()) {
					// 원시 배열 생성
					JSONArray jb = new JSONArray();
					jb.add(rs2.getString("userid"));
					jb.add(rs2.getString("username"));
					jb.add(rs2.getString("phone"));
					jb.add(rs2.getString("telephone"));
					jb.add(rs2.getString("level"));
					jb.add(rs2.getString("point"));
					jb.add(rs2.getString("last_login_date"));
					jb.add(rs2.getString("registration_date"));
					jb.add(rs2.getString("email_subscription"));
					jb.add(rs2.getString("sms_subscription"));
					jb.add(rs2.getString("is_dormant"));
					ja.add(jb);
				}
				
				JSONObject jsonObject = new JSONObject();
				jsonObject.put("ea", ea);
				jsonObject.put("list", ja);
				result = jsonObject.toString();
				model.addAttribute("result", result);
				
				con.close();
				ps2.close();
			} catch (Exception e) {
				e.printStackTrace();
				// 에러 메시지 반환
				result = "error:32";
				model.addAttribute("result", result);
			}
		} else {
			// 해당 키값이 맞지 않을 경우 에러 메시지
			model.addAttribute("result", "error:32");
		}
	}
}
