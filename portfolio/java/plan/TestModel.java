package plan;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class TestModel {
	  ArrayList<String> testData(String area, String part, String date1, String date2) throws Exception {
	    ArrayList<String> cpartnoList = new ArrayList<>();
	    try {
	      Connection con = DbConfig.info();
	      String sql = "select * from camp where carea = ? and cpart = ? and (cindate >= ? or coutdate >= ?)";

	      PreparedStatement ps = con.prepareStatement(sql);
	      ps.setString(1, area);
	      ps.setString(2, part);
	      ps.setString(3, date1);
	      ps.setString(4, date2);

	      ResultSet rs = ps.executeQuery();
	      while (rs.next()) {
	        cpartnoList.add(rs.getString("cpartno"));
	      }
	      con.close();
	      rs.close();
	      ps.close();
	    } catch (Exception e) {
	      System.out.println("예약 확인 오류 : " + e);
	      throw e; // 예외를 다시 던져서 처리하도록 함
	    }
	    return cpartnoList;
	  }
	}
