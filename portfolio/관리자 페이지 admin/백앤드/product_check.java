package admin;

import java.util.Date; 

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class product_check {

	int idx;
	String pd_bmenu,pd_smenu,pd_code,pd_name,pd_info,pd_money,pd_sail,pd_price,pd_ea,pd_cell,pd_useyn,pd_editor;
	String pd_file1;
	String pd_file2;
	String pd_file3;
	Date pd_date;
	
	MultipartFile v_file1;
	MultipartFile v_file2;
	MultipartFile v_file3;
	MultipartFile pd_file;
	//form 전송할땐 pd_file2로 받고 -> 이후에 데이터베이스에 넣을땐 받은 파일의 이름을 pd_file로 mybatis에서 넣어준다
	//post로 넘어온값을 저장하는 용도로 사용

}
