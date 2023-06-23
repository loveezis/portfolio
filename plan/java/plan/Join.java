package plan;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Join extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public Join() {
        super();

    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		
		String id = request.getParameter("mid");
		String pass = request.getParameter("mpass");
		String name = request.getParameter("mname");
		String tel = request.getParameter("mtel");
		String email = request.getParameter("memail");
		System.out.println(id+pass+name+tel+email);
		String sms;
		String ad;
		if(request.getParameter("msms") != null) {
			sms = request.getParameter("msms");			
		}else {
			sms = "N";
		}
		if(request.getParameter("mad") != null) {
			ad = request.getParameter("mad");
		}else {
			ad = "N";
		}
		
		PrintWriter pw = response.getWriter();
		
		int result = new JoinModel().doJoin(id, pass, name, tel, email, sms, ad);
		if(result > 0) {
			pw.print("<script>alert('회원가입을 환영합니다.'); location.href='./login.html'</script>");
		}
		pw.flush();
		pw.close();
	}

}
