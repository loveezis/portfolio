package admin;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

@WebServlet("/admin/add_masterok.do")
public class add_masterok extends HttpServlet {
	private static final long serialVersionUID = 1L;
	PrintWriter pw;
	private static final String String = null;
   
	insert_table it = new insert_table(); //테이블 생성 객체
	JSONObject ob;
    public add_masterok() {
        super();
   
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setCharacterEncoding("utf-8");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		this.pw = response.getWriter();
		
		String mid = request.getParameter("mid");
		String mpass = request.getParameter("mpass");
		String mname = request.getParameter("mname");
		String memail = request.getParameter("memail");
		String mtel = request.getParameter("mtel");
		String mteam1 = request.getParameter("mteam1");
		String mteam2 = request.getParameter("mteam2");
		String admincheck = request.getParameter("admincheck");
		
		
		try {
			String insertTable = this.it.insert(mid,mpass,mname,memail,mtel,mteam1,mteam2);
			this.pw.print("<script>"
					+ "alert('회원 가입이 완료되었습니다.');"
					+ "location.href='./login.jsp';</script>");
		} catch (Exception e) {
			this.pw.print("<script>"
					+ "alert('해당 아이디는 사용하실수 없습니다.');"
					+ "history.go(-1);</script>");
		}
	}

}
