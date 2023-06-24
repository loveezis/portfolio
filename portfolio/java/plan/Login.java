package plan;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public Login() {
        super();
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		
		String id = request.getParameter("mid");
		String pass = request.getParameter("mpass");
		
		PrintWriter pw = response.getWriter();
		
		LoginModel model = new LoginModel();
		Boolean result = model.login(id, pass);
		String name = model.username();
		String tel = model.usertel();
		RequestDispatcher ctrl = request.getRequestDispatcher("./reserve.jsp");
		if(result) {
			HttpSession session = request.getSession();
			pw.print("<script>alert('"+name+" 님 환영합니다.');</script>");
			session.setAttribute("username", name);
			session.setAttribute("usertel", tel);
			
			ctrl.forward(request, response);
		}else {
			pw.print("<script>alert('로그인 정보를 다시 확인해주세요.'); history.go(-1);</script>");
		}
		pw.flush();
		pw.close();
	}

}
