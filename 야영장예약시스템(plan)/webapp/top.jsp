<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
HttpSession session2 = request.getSession();
String name = (String)session2.getAttribute("username");
%>
<header class="top">
			<ol id="loginno">
				<li></li>
				<li></li>
				<li class="pointer" onclick="noservice()">이용안내</li>
				<li class="pointer" onclick="doRes()">예약하기</li>
				<li class="pointer" onclick="doCon()">예약확인</li>
				<li class="pointer" onclick="noservice()">마이페이지</li>
				<li class="pointer" onclick="noservice()">그린포인트</li>
				<li class="tops">
					<ul>
						<li></li>
						
						<li>
							<span></span>
							<span class="pointer" onclick="dologin()">로그인</span>
						</li>
						<li>
							<span></span>
							<span class="pointer" onclick="dojoin()">회원가입</span>
						</li>
					</ul>
				</li>
			</ol>
			<ol id="loginok">
				<li></li>
				<li></li>
				<li class="pointer" onclick="noservice()">이용안내</li>
				<li class="pointer" onclick="doRes()">예약하기</li>
				<li class="pointer" onclick="doCon()">예약확인</li>
				<li class="pointer" onclick="noservice()">마이페이지</li>
				<li class="pointer" onclick="noservice()">그린포인트</li>
				<li>
					<div class="icoperson"><%=name %>님 환영합니다.</div>
					<div class="pointer" onclick="dologout()">로그아웃</div>
				</li>
			</ol>		
		</header>