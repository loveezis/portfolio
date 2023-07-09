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

import com.google.gson.Gson;

@WebServlet("/testok.do")
public class Test extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public Test() {
        super();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	  response.setContentType("application/json");
    	  response.setCharacterEncoding("UTF-8");
    	  request.setCharacterEncoding("UTF-8");
    	  
    	  String area = request.getParameter("carea");
    	  String[] data = area.split(",");
    	  System.out.println(Arrays.toString(data));
    	  
    	  System.out.println(data[0]);
    	  System.out.println(data[1]);
    	  System.out.println(data[2]);
    	  System.out.println(data[3]);
    	  
    	  
    	  TestModel model = new TestModel();
    	  ArrayList<String> arr = new ArrayList<>();
    	  try {
    	    arr = model.testData(data[0], data[1], data[2], data[3]);
    	    System.out.println(arr);
    	  } catch (Exception e) {
    	    e.printStackTrace();
    	  }
    	  
    	  Gson gson = new Gson(); //json 배열로 만들어서 리턴하기위한 라이브러리 객체 생성
    	  String jsonResponse = gson.toJson(arr); // 배열을 JSON 형식으로 변환
    	  
    	  PrintWriter pw = response.getWriter();
    	  pw.print(jsonResponse);
    	  pw.flush();
    	  pw.close();
    	}
}
