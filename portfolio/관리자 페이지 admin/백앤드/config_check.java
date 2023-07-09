package admin;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class config_check {
	
	int idx;
	
	String homename, adminemail, point_yn,
	joinpoint,joinlevel,companyname, companynumber, companyboss,
	companytel, comtel, comnumber, companypost, companyaddr, mastername,
	masteremail, bankname, banknumber, card_yn, tel_yn, book_yn, minpoint, maxpoint,
	cash_yn, deliveryname, deliverymoney, deliverydate;
	
	Date master_date;
	

}
