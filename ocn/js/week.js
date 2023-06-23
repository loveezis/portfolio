$(function(){
    var weekUl = $("<ul class=moviebox></ul>")
    var weekLi = $(`
    <li></li>
    <li><em>타짜 원아이드잭</em></li>
    <li><em>이스케이프룸2(노 웨이 아웃)</em></li>
    <li><em>리미트리스</em></li>
    <li><em>나를 찾아줘</em></li>
    <li><em>더 이퀄라이저2</em></li>
    `)
    weekUl.append(weekLi)
    $(".weekday").append(weekUl)
})