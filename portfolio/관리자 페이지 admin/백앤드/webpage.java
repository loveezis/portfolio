package admin;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class webpage {

	// xml에 대한 데이터를 가져올 때 사용하는 의존성 투입 (dbconfig.xml db접속확인)
	@Inject
	private SqlSessionTemplate sqlSession; // 설정하기에 따라 이름을 줄일수도있다.
	private Object pw;

	@RequestMapping("/admin/logout.do")
	protected void doPost(Model m, HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();
		HttpSession session = request.getSession();
		session.invalidate(); // 저장된 session 데이터를 삭제시킨다.

		m.addAttribute("message", "정상적으로 로그아웃 되었습니다");
		pw.print("<script>" + "alert('정상적으로 로그아웃 되었습니다.');" + "location.href='./login.jsp';</script>");

	}

	@GetMapping("/admin/admin_update.do")
	public void updates(@RequestParam("mid") String mid, HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();

		int r = sqlSession.update("admindb.update", mid); // mapper update 태그 에서 가져옴
		if (r > 0) {

			pw.print("<script>alert('정상적으로 승인 되었습니다.');" + "location.href='./admin_list.jsp';</script>");

			/* return "redirect:./admin_list.jsp"; */
		} else {
			System.out.println("데이터 베이스 오류");
		}
	}

	@PostMapping("/admin/configOk.do")
	public void config(@ModelAttribute config_check configCheck, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();
		int r = sqlSession.update("update.config", configCheck);
		System.out.println(r);
		if(r > 0) {
			pw.print("<script>alert('홈페이지 설정 수정 되었습니다.');"
					+ "location.href='./config_menu.jsp';</script>");
		}
	}
	/* 맴버 수정 업데이트 */
	@PostMapping("/admin/modify_member.do")
	public void member_update(@ModelAttribute modify_check m_check, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();
		int success = sqlSession.update("admindb.update2", m_check);
		if (success > 0) {
			pw.print("<script>alert('정상적으로 수정이 완료되었습니다.');" + "window.opener.location.reload();"
					+ "window.close();</script>");
		}
	}

	@GetMapping("/admin/modify_human.do")
	public void config(@RequestParam("mid") String userid, HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();
		int r = sqlSession.update("admindb.humanCheck", userid);
		if (r > 0) {
			pw.print("<script>alert('휴면계정으로 전환되었습니다.'); " + "location.href = './member_list.jsp';" + "</script>");
			return;
		}
	}

	@RequestMapping("/admin/choiceDel.do")
	public void c_del(@RequestParam("userid") String[] userid, HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		System.out.println(Arrays.toString(userid));

		// 여러 개의 파라미터를 전달하기 위해 Map 또는 DTO 객체를 사용
		Map<String, Object> params = new HashMap<>();
		params.put("userid", userid);

		int r = sqlSession.delete("admindb.deleteByIds", params);
		PrintWriter pw = response.getWriter();
		if (r > 0) {
			pw.print("<script>" + "alert('정상적으로 삭제되었습니다.'); " + "location.href = './member_list.jsp';" + "</script>");
			return;
		}
	}

	@PostMapping("/admin/notice_insert.do")
	public void notice_insert(@ModelAttribute("borad") notice_check nc, HttpServletRequest req, HttpServletResponse res)
			throws Exception {
		req.setCharacterEncoding("utf-8");
		res.setCharacterEncoding("utf-8");
		res.setContentType("text/html");
		PrintWriter pw = res.getWriter();
		MultipartFile nt_file2 = nc.getNt_file2(); // getter에서 해당 변수값을 갖고옴
		String OriginalName = nt_file2.getOriginalFilename(); // 원래 이름을 갖고옴

		String realPath = req.getServletContext().getRealPath("");
		System.out.println(realPath);
		String uploadPath = realPath + "noticefile/";
		System.out.println(uploadPath);

		File file = new File(uploadPath + OriginalName);
		FileCopyUtils.copy(nt_file2.getBytes(), file);

		String dbUrl = "./noticeFile/" + OriginalName;
		nc.setNt_file(dbUrl);

		sqlSession.insert("admindb.insert_notice", nc);

		pw.print("<script>alert('공지사항이 등록 되었습니다.');" + "location.href='./notice_list.jsp';</script>");

	}

	@RequestMapping("/admin/product_insert.do")
	public void product_insert(@ModelAttribute("product_check") product_check pd_ck, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();

		Date dt = new Date();
		long timestamp = dt.getTime();

		// 클라이언트에서 넘겨진 정보 정리
		// pd_ck 객체에 있는 멀티파트 변수를 가져옴
		MultipartFile v_file1 = pd_ck.getV_file1();
		MultipartFile v_file2 = pd_ck.getV_file2();
		MultipartFile v_file3 = pd_ck.getV_file3();

		// 파일의 원래 이름을 가져옴
		String originalFileName1 = v_file1.getOriginalFilename();
		String originalFileName2 = v_file2.getOriginalFilename();
		String originalFileName3 = v_file2.getOriginalFilename();

		// 서버에 저장할 정보를 정리
		// 어디에 저장할 것인가?
		// 우선 서버의 위치를 찾는다.
		String serverPath = request.getServletContext().getRealPath("");
		// 업로드할 폴더명을 추가해 준다
		String uploadPath = serverPath + "upload/";

		// 저장할 빈 ㅍ일을 미리 생성함
		if (!v_file1.isEmpty()) {
			File uploadFile1 = new File(uploadPath + timestamp + originalFileName1);
			// vfile들을 파일을 복사해서 uploadFile 에 저장
			FileCopyUtils.copy(v_file1.getBytes(), uploadFile1);
			// 데이터 베이스에 업로드 파일의 위치를 저장하기 위한 정리
			String imageUrl1 = "./upload/" + timestamp + originalFileName1;
			pd_ck.setPd_file1(imageUrl1);

		}
		if (!v_file2.isEmpty()) {
			File uploadFile2 = new File(uploadPath + timestamp + originalFileName2);
			// vfile들을 파일을 복사해서 uploadFile 에 저장
			FileCopyUtils.copy(v_file2.getBytes(), uploadFile2);
			// 데이터 베이스에 업로드 파일의 위치를 저장하기 위한 정리
			String imageUrl2 = "./upload/" + timestamp + originalFileName2;
			pd_ck.setPd_file2(imageUrl2);

		}
		if (!v_file3.isEmpty()) {
			File uploadFile3 = new File(uploadPath + timestamp + originalFileName3);
			// vfile들을 파일을 복사해서 uploadFile 에 저장
			FileCopyUtils.copy(v_file3.getBytes(), uploadFile3);
			// 데이터 베이스에 업로드 파일의 위치를 저장하기 위한 정리
			String imageUrl3 = "./upload/" + timestamp + originalFileName3;
			pd_ck.setPd_file3(imageUrl3);

		}
		sqlSession.insert("admindb.product_insert", pd_ck);

		pw.print("<script>alert('상품이 등록되었습니다.');" + "location.href='./product_list.jsp';</script>");

	}

	@RequestMapping("/admin/code_check.do")
	public void cd_ck(HttpServletRequest req, HttpServletResponse res) throws Exception {
		req.setCharacterEncoding("utf-8");
		res.setCharacterEncoding("utf-8");
		res.setContentType("application/x-www-form-urlencoded");
		PrintWriter pw = res.getWriter();
		code_check ck = new code_check();
		String code = req.getParameter("code");

		try {
			String checkmsg = ck.code_ck(code);

			pw.print(checkmsg);
			pw.flush();
			pw.close();

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@RequestMapping("/admin/productDel.do")
	public void config(@RequestParam("pd_code") String[] list, HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");

		Map<String, Object> paramMap = new HashMap<>();
		paramMap.put("pd_code", list);

		int r = sqlSession.update("admindb.listDel", paramMap);

		PrintWriter pw = response.getWriter();
		if (r > 0) {
			pw.print("<script>alert('정상적으로 삭제되었습니다.'); " + "location.href = './product_list.jsp';" + "</script>");
		} else {
			pw.print("<script>alert('삭제 실패했습니다.'); " + "history.back();" + "</script>");
		}
	}

	/* notice 리스트 삭제 */
	@RequestMapping("/admin/noticeDel.do")
	public void noticeListDel(@RequestParam("idx") String[] idx, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		System.out.println(Arrays.toString(idx));

		// 여러 개의 파라미터를 전달하기 위해 Map 또는 DTO 객체를 사용
		Map<String, Object> params = new HashMap<>();
		params.put("userid", idx);

		int r = sqlSession.delete("admindb.noticeDelete", params);
		PrintWriter pw = response.getWriter();
		if (r > 0) {
			pw.print("<script>" + "alert('정상적으로 삭제되었습니다.'); " + "location.href = './notice_list.jsp';" + "</script>");
		}
	}

	/* notice 수정하는곳 */
	@RequestMapping("/admin/noticeModify.do")
	public void noticeModify(@ModelAttribute("board") notice_check nc, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		int r = sqlSession.update("admindb.noticeModify", nc);
		PrintWriter pw = response.getWriter();
		if (r > 0) {
			pw.print("<script>" + "alert('정상적으로 수정되었습니다.'); " + "location.href = './notice_list.jsp';" + "</script>");
		}
	}
	
	@RequestMapping("/admin/mainBanner.do")
	public void mainBanner(@ModelAttribute("borad") bannerCheck bc,HttpServletRequest request, HttpServletResponse response)throws Exception{	
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		int r = sqlSession.update("update.mainBanner", bc);
		PrintWriter pw = response.getWriter();
		if (r > 0) {
			pw.print("<script>" + "alert('메인배너 수정되었습니다.'); " + "location.href = './shop_setup.jsp';" + "</script>");
		}
		
		
	}
	@RequestMapping("/admin/popupBanner.do")
	public void popupBanner(@ModelAttribute("borad") bannerCheck bc,HttpServletRequest request, HttpServletResponse response)throws Exception{	
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		int r = sqlSession.update("update.pupupBanner", bc);
		PrintWriter pw = response.getWriter();
		if (r > 0) {
			pw.print("<script>" + "alert('팝업 배너가 수정 되었습니다.'); " + "location.href = './shop_setup.jsp';" + "</script>");
		}
		
		
	}
	@RequestMapping("/admin/adBanner.do")
	public void adBanner(@ModelAttribute("borad") bannerCheck bc,HttpServletRequest request, HttpServletResponse response)throws Exception{	
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		int r = sqlSession.update("update.adBanner", bc);
		PrintWriter pw = response.getWriter();
		if (r > 0) {
			pw.print("<script>" + "alert('ad배너가 업데이트 되었습니다.'); " + "location.href = './shop_setup.jsp';" + "</script>");
		}
		
		
	}
}



















