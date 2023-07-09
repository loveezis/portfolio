<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./login.css?v=1"></link>
    <link rel="stylesheet" type="text/css" href="./css/login.css">
    <link rel="stylesheet" type="text/css" href="./css/default.css">
    <title>Document</title>
</head>
<body>
    <div class="container">
            <div class="contents">
                <span>
                    HOME ▶ 로그인
                </span>
                <div class="sub_cotents">
                    <span>로그인</span>
                    <div class="member_info">
                        <h3>회원 로그인</h3>
                        <ul>
                            <li>
                                <div class="member_login_box">
                                    <span>
                                        <input type="text" class="login_input" placeholder="아이디를 입력하세요!">
                                    </span>
                                    <span>
                                        <input type="password" class="login_input" placeholder="패스워드를 입력하세요!">
                                    </span>
                                    <button type="submit" class="login_btn" title="회원 로그인">로그인</button>
                                </div>
                            </li>
                            <li>
                                <label class="id_save"><input type="checkbox"> 아이디 저장</label>
                            </li>
                        </ul>
                        <h3 class="none"></h3>
                        <ol class="btn_login_box">
                            <li>
                            <input type="button" value="회원가입" class="btn_box1" title="회원가입">
                            </li>
                            <li>
                            <input type="button" value="아이디 찾기" class="btn_box1 reserve1" title="아이디 찾기">
                            </li>
                            <li>
                            <input type="button" value="비밀번호 찾기" class="btn_box1 reserve1" title="비밀번호 찾기">
                            </li>
                        </ol>
                        <h3>비회원 로그인</h3>
                        <ul>
                            <li>
                                <div class="member_login_box">
                                    <span>
                                        <input type="text" class="login_input" placeholder="주문자명">
                                    </span>
                                    <span>
                                        <input type="text" class="login_input" placeholder="주문번호">
                                    </span>
                                    <button type="submit" class="login_btn reserve1" title="비회원 로그인">확인</button>
                                </div>
                            </li>
                            <li style="font-size: 12px; height: 40px; line-height: 40px;">
                                ※ 주문번호와 비밀번호를 잊으신 경우, 고객센터로 문의하여 주시기 바랍니다.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
</body>
</html>