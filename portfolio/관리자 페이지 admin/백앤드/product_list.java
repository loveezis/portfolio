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
public class product_list {

	@Autowired
	BasicDataSource dataSource;

	@RequestMapping("/admin/product_list_api.do")
	public void product_api(Model m,HttpServletRequest request)throws Exception{
		String result = ""; // 배열 데이터를 최종적으로 이용하는 변수
		String sign = request.getParameter("keys").intern();
		String page = request.getParameter("page");
		String pd_name = "";
		String pd_code = "";
		if(request.getParameter("pd_name") != null) {
			pd_name = request.getParameter("pd_name");
		}
		else if(request.getParameter("pd_code") != null) {
			pd_code = request.getParameter("pd_code");
		}
		
		int number = Integer.parseInt(page);
		String ea = "";
		String sql = "";

		if (sign == "listok") {
			// 해당 키 값일때만 통과
			
			// db호출
			try {
				Connection con = dataSource.getConnection();
				
				String sql2  = "";
				ResultSet rs;
				PreparedStatement ps = null;
				
				String where = "where ";
				if(pd_name != "" || pd_code != "") {
					if(pd_name != "") {
						where += "pd_name like'%"+pd_name+"%'";
					}
					else if(pd_code != "") {
						where += "pd_code like'%"+pd_code+"%'";
					}
				}else {
					where = "";
				}
				
				
				if (number > 0) {
					  sql = "select * from product_write order by idx desc limit ?,5";
					  ps = con.prepareStatement(sql);
					  ps.setInt(1, number);  // 수정된 부분: number * 5로 계산하여 페이지 번호에 해당하는 레코드 시작 인덱스 설정
				} else  if(number == 0){
					  sql = "select * from product_write "+where+" order by idx desc limit 0,5";
					  ps = con.prepareStatement(sql);
				}
				rs = ps.executeQuery();
				
				
				String sql1 = "select count(*) as ea from product_write "+where;
				PreparedStatement ps1 = con.prepareStatement(sql1);
				ResultSet rs1 = ps1.executeQuery();
				while(rs1.next()) {
					ea = rs1.getString("ea");
				}
				rs1.close();
				ps1.close();

				
				
				// json 배열 생성
				JSONArray ja = new JSONArray();
				while (rs.next()) {
					// 키값 + 원시배열생성
					JSONArray jb = new JSONArray();
					jb.add(rs.getString("pd_code"));
					jb.add(rs.getString("pd_code"));
					jb.add(rs.getString("pd_file1"));
					jb.add(rs.getString("pd_name"));
					jb.add(rs.getString("pd_bmenu"));
					jb.add(rs.getString("pd_money"));
					jb.add(rs.getString("pd_price"));
					jb.add(rs.getString("pd_sail"));
					jb.add(rs.getString("pd_ea"));
					jb.add(rs.getString("pd_useyn"));
					jb.add(rs.getString("pd_code"));
					ja.add(jb);
				}
				JSONObject JB2 = new JSONObject();
				// 웹에 문자열로 바로 출력시킴
				JB2.put("ea", ea);
				JB2.put("list", ja);
				
				result = JB2.toString();
				m.addAttribute("result", result);
				con.close();
				ps.close();

			} catch (Exception e) {
				e.printStackTrace();
				// 에러 메시지 반환
				result = "error:32";
			}
		} else {
			// 해당 키값이 맞지 않을경우 에러 메시지
			m.addAttribute("result", "error:32");
		}
		
	}
}
