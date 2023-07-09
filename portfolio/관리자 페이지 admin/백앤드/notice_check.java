package admin;

import java.util.Date;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class notice_check {

		int idx;
		String nt_yn,nt_subject,nt_writer,nt_file,ck_area,click_count;
		Date nt_date;
	
		MultipartFile nt_file2;
}
