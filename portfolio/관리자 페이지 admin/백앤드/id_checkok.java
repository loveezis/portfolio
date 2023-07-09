package admin;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/admin/id_checkok.do")
public class id_checkok extends HttpServlet {
	private static final long serialVersionUID = 1L;
	idcheck_sub is = new idcheck_sub();
	PrintWriter pw;
    public id_checkok() {
        super();
      
    }
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
			request.setCharacterEncoding("utf-8");
			response.setCharacterEncoding("utf-8");
			response.setContentType("application/x-www-form-urlencoded");
			this.pw = response.getWriter();
			
			String userid = request.getParameter("mid");
				
			try {
				String checkmsg = this.is.checkid(userid);
				
				this.pw.print(checkmsg);
				pw.flush();
				pw.close();
					
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
		
	}
}
