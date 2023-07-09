package web;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.lang.reflect.Member;
import java.util.List;

import javax.inject.Inject;
import javax.jws.soap.SOAPBinding.Use;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.IOUtils;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import admin.member_check;

@Controller
public class web_page {

	@Inject
	private SqlSessionTemplate sqlSession; // 설정하기에 따라 이름을 줄일수도있다.

	/*
	 * 이미지 api서버 GetMapping으로 무조건 셋팅하게 됩니다. {name:} => 의존성 객체를 말합니다.(가상 URL 주소 형태로
	 * 인식 시킴)
	 * 
	 * @ResponseBody : jsp에 결과값을 전달할때 사용합니다.
	 * 
	 * @RequestBody : jsp에서 값을 받은 후 해당 컨트롤에서 데이터 가공 후 전달(Ajax)
	 * 
	 * @PathVariable : 정규식 코드를 구분하여 문자화 시키는 작업 (가상변수->실제변수 변환)
	 */
	@GetMapping("/imgapi/{name:[a-zA-Z0-9]+}")
	public @ResponseBody byte[] imgsrc(@PathVariable String name, HttpServletRequest req) throws Exception {
		// System.out.println(name); 이름
		String webpath = req.getSession().getServletContext().getRealPath("/admin/banners/");

		// System.out.println(webpath); 다운받을경로
		String img = webpath + name + ".png";

		// 경로
		// E:\portfolio\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\wtpwebapps\admin\admin\banners\banner1.png
		// System.out.println(img);
		InputStream in = new FileInputStream(img);
		byte[] imgurl = IOUtils.toByteArray(in);
		in.close();
		return imgurl;
	}

	@RequestMapping("/admin/imageupload.do") // jsp실행경로가 admin이기때문에 admin에서 이쪽위치로 컨텍한다.
	public void imgupload(HttpServletRequest req, HttpServletResponse res, MultipartFile upload) {
		OutputStream out = null;
		PrintWriter pw = null;
		res.setCharacterEncoding("utf-8");
		res.setContentType("text/html; charset=utf-8");

		try {
			String fileName = upload.getOriginalFilename();
			byte[] bytes = upload.getBytes();

			String uploadpath = req.getSession().getServletContext().getRealPath("/product_img/");
			System.out.println(uploadpath);
			String imgsave = uploadpath + fileName;
			System.out.println(imgsave);
			out = new FileOutputStream(new File(imgsave));
			out.write(bytes);

			pw = res.getWriter();
			String fileurl = "../product_img/" + fileName; // jsp파일이 실행되는 위치를 빠져나온경로
			pw.println("{\"filename\":\"" + fileName + "\", \"uploaded\":1,\"url\":\"" + fileurl + "\"}");
			pw.flush();

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@RequestMapping("/memberLogin.do")
	public void memberLogin(@ModelAttribute("board") memberCheck mc, HttpServletResponse response,
			HttpServletRequest request) throws Exception {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();
		List<memberCheck> members = sqlSession.selectList("admindb.selectMember", mc);
		String mid = "";
		// 로그인 성공 여부를 나타내는 변수
		int loginResult = 0; // 0: 실패, 1: 성공
		for (memberCheck member : members) {
			if (member.getUserid().equals(mc.getUserid())
					// 반복문 안에서의 값이 getter의 mc.getUserid와 같은지 확인
					&& member.getPassword().equals(mc.getPassword())) {
				// 반복문 안에서의 값이 getter의 mc.getPassword와 같은지 확인
				loginResult = 1; // 로그인 성공
				mid = mc.getUserid();
				break;
			}
		}
		// 로그인 결과에 따른 처리
		if (loginResult == 1) {
			HttpSession session = request.getSession();
			session.setAttribute("mid", mid);
			pw.print("<script>alert('" + mid + "님 환영합니다.');" + "location.href='index.jsp';</script>");

		} else {
			// 로그인 실패 처리
			// 원하는 동작을 수행하거나 에러 메시지를 출력할 수 있습니다.
			// 예를 들어, 실패 메시지를 출력하는 경우:
			pw.print("<script>alert('정보가 올바르지 않습니다.');" + "location.href='index.jsp';</script>");
		}
	}

	@RequestMapping("/productLogout.do")
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");

		PrintWriter pw = response.getWriter();
		HttpSession session = request.getSession();
		session.invalidate();
		
		pw.print("<script>" +
			    "window.localStorage.removeItem('mid');" +
			    "alert('정상적으로 로그아웃 되었습니다.');" +
			    "location.href='./index.jsp';" +
			    "</script>");

	}
	
	/* product 맴버 가입 */
	@RequestMapping("/productJoin.do")
	public void productJoin(@ModelAttribute("board") memberCheck mc, HttpServletRequest request,HttpServletResponse response)throws Exception{
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
			
		String address = mc.getAddr1() + " " +  mc.getAddr2() + " " + mc.getAddr3();
		mc.setAddress(address);
		
		int r = sqlSession.insert("admindb.productJoin", mc);
		PrintWriter pw = response.getWriter();
		if (r > 0) {
			pw.print("<script>" + "alert('회원가입이 되었습니다.'); " + "location.href = './productLogin.jsp';" + "</script>");
		}
		
	}
}
