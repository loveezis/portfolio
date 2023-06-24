package plan;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class part4del extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	PrintWriter pw = null;
	
    public part4del() {
        super();
        
    }

	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
	
		req.setCharacterEncoding("UTF-8");
		res.setCharacterEncoding("UTF-8");
		res.setContentType("text/html");
		
		this.pw = res.getWriter();
		String ccode = req.getParameter("ccode");
		
		try {
			part4delok delok = new part4delok();
			String j = delok.deleteok(ccode);
			if (j.equals("ok")) {
			    this.pw.print("<script>alert('예약이 취소 되었습니다'); location.href= \"./login.jsp\"; </script>");
			} else {
			    this.pw.print("<script>alert('예약 취소 실패'); location.reload(); </script>");
			}


		}
		catch (Exception e) {
			System.out.println(e);
		}
			
	}
}
