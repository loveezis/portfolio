package admin;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

public class code_check {
	database db = new database();

	public String code_ck(String code) throws Exception {
		// int a = Integer.parseInt(code);

		System.out.println(code);
		Connection con = db.info();
		String sql = "select * from product_write where pd_code=?";
		PreparedStatement ps = con.prepareStatement(sql);
		ps.setString(1, code);
		String msg = "";
		ResultSet rs = null;
		rs = ps.executeQuery();
		if (rs.next() == true) {
			msg = "no";
		} else {
			msg = "use";
		}
		rs.close();
		ps.close();

		System.out.println(msg);
		return msg;
	}
}
