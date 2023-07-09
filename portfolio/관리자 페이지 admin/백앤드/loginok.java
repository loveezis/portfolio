package admin;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/admin/loginok.do")
public class loginok extends HttpServlet {
	private static final long serialVersionUID = 1L;
	logincheck lcheck = new logincheck();
	PrintWriter pw;
	RequestDispatcher rd;
    public loginok() {
        super();
 
    }
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		
		//로그인 아이디 및 패스워드 (파라미터 전송받는곳)
		String loginId = request.getParameter("loginId");
		String loginPw = request.getParameter("loginPw");
		this.pw = response.getWriter();
		System.out.println(loginId);
		System.out.println(loginPw);
		try {
			String idpw = this.lcheck.login_check(loginId, loginPw);
			System.out.println(idpw);
			//로그인 가능여부 및 관리자 승인여부 (y,n) 값 갖고오기
			
			String[] idpwarry = idpw.split(","); //사용여부 + admincheck="Y,N값";
			
			if(idpwarry[0].intern() == "use" && idpwarry[1].intern() == "Y") {
				
				 HttpSession session = request.getSession(); 
				 session.setAttribute("loginId",loginId);
				 session.setAttribute("adminY", idpwarry[1]);
				 	
				this.pw.print("<script>"
						+ "alert('관리자 페이지로 이동합니다.');"
						+ "location.href='./admin_list.jsp';</script>");
			}
			if(idpwarry[0].intern() == "use") {
				this.pw.print("<script>"
						+ "alert('관리자의 승인이 필요합니다.');"
						+ "history.go(-1);</script>");
			}
			else{
				this.pw.print("<script>alert('회원 정보가 일치하지 않습니다.');"
						+ "history.go(-1);</script>");
			}
			pw.close();
			
		} catch (Exception e) {
			System.out.println("메소드 전송 오류");
			e.printStackTrace();
		}
	}

}
