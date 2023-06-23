package plan;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class part3_insert extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public part3_insert() {
        super();
    }
    
    PrintWriter pw = null;
    
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		req.setCharacterEncoding("utf-8");
		this.pw = res.getWriter();
		
		String[] info = req.getParameterValues("info");
		
		part3_insertm pm = new part3_insertm();
		try {
			String result = pm.insert(info);
			if(result.equals("ok")) {
				this.pw.print("<script>"
						+ "alert('정상적으로 예약완료되었습니다.');"
						+ "location.href = './part4_no.jsp';"
						+ "</script>");
			}
			else {
				this.pw.print("<script>"
						+ "alert('예약에 실패했습니다.');"
						+ "history.go(-1);"
						+ "</script>");
			}
		} catch (Exception e) {
			System.out.println(e);
		}
		
		
	}

}
