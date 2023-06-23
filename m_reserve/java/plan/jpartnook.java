package plan;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class jpartnook extends HttpServlet {
	private static final long serialVersionUID = 1L;
	PrintWriter pw = null;
	
    public jpartnook() {
        super();
    }
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		
		req.setCharacterEncoding("UTF-8");
		res.setCharacterEncoding("UTF-8");
		res.setContentType("text/html");
		
		this.pw = res.getWriter();
		
		String part4no = req.getParameter("jpart4no");
		
		
		try {
			part4_nook mp4 = new part4_nook(); 
			
			ArrayList<String> vvv = mp4.part4noo(part4no);
			System.out.println(vvv.get(12));
			if(vvv.get(12).equals("ok")) {
				req.setAttribute("4data", vvv);
				RequestDispatcher view = req.getRequestDispatcher("./part4nook.jsp");
				view.forward(req, res);
			}
		}
		catch (Exception e) {
			this.pw.print("<script> alert('예약번호를 다시 확인하세요.');"
					+ "location.href = './part4_no.jsp';</script>");
		}		
	}
}









