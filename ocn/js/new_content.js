$(function () {

    var blackImg = [
        "mini1-black.png",
        "mini2-black.png",
        "mini3-black.png",
        "mini4-black.png",
        "mini5-black.png",]

    var contentDiv = $("<div class=contenttop></div>")
    var contentSpan = $("<span>New Contents</span>")
    var contentSpan2 = $("<span></span>")
    contentDiv.append(contentSpan,contentSpan2)
    $(".newContents").append(contentDiv)



    var ea = blackImg.length

    var contentUl = $("<ul class=contentcss></ul>")
    var contentLi;
    var w = 0; 

    while(w < ea){
            contentLi = $(
                `<li><img src="./contents/` + blackImg[w] + `"></li>`)
       
            contentUl.append(contentLi)
            w++
    }
    $(".newContents").append(contentUl)

    
    $(".contentcss > li").bind({
        "mouseenter": function() {
          var node = $(this).index();
          $(".contentcss > li > img").eq(node).attr("src", `./contents/mini`+(node+1)+`-color.png`)

        },
        "mouseleave":function(){
            var node2 = $(this).index();
            $(".contentcss > li > img").eq(node2).attr("src", `./contents/mini`+(node2+1)+`-black.png`)

        }
      });
})