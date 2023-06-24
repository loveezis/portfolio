package plan;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class part3_controller extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public part3_controller() {
        super();
    }

    	RequestDispatcher rd = null;
    
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		req.setCharacterEncoding("utf-8");
		String carea = req.getParameter("carea");
		String cpart = req.getParameter("cpart");
		String cpartno = req.getParameter("cpartno");
		String cindate = req.getParameter("cindate");
		String coutdate = req.getParameter("coutdate");
		String cname = req.getParameter("cname");
		String ctel = req.getParameter("ctel");
		String cperson = req.getParameter("cperson");
		String ccode = req.getParameter("ccode");
		String cpay = req.getParameter("cpay");
		String cpayok = req.getParameter("cpayok");
		String cmoney = req.getParameter("cmoney");
		System.out.println(cpartno);
		
		req.setAttribute("area", carea);
		req.setAttribute("part", cpart);
		req.setAttribute("partno", cpartno);
		req.setAttribute("indate", cindate);
		req.setAttribute("outdate", coutdate);
		req.setAttribute("name", cname);
		req.setAttribute("tel", ctel);
		req.setAttribute("person", cperson);
		req.setAttribute("code", ccode);
		req.setAttribute("pay", cpay);
		req.setAttribute("payok", cpayok);
		req.setAttribute("money", cmoney);
		
		this.rd = req.getRequestDispatcher("./part3.jsp");
		rd.forward(req, res);
		
	}

}
