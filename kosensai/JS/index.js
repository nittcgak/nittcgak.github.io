$(function(){
    var contents=1;
    $("#tab .tab1").click(function(){
        $("#tab").css("opacity","0");
        $("#wrap1").css({opacity:"1"});
        $("#menu").css({opacity:"1"});
        $("#menu").css("pointer-events","auto");
        $("#wrap2,#wrap3,#wrap4,#wrap5").css("pointer-events","none");
        setTimeout(function(){
            $("#tab").css("display","none");
        },700);
    });
    $("#tab .tab2").click(function(){
        $("#tab").css("opacity","0");
        $("#wrap2").css("opacity","1");
        $("#menu").css({opacity:"1"});
        $("#menu").css("pointer-events","auto");
        $("#wrap1,#wrap3,#wrap4,#wrap5").css("pointer-events","none");
        setTimeout(function(){
            $("#tab").css("display","none")
        },700);
    });
    $("#tab .tab3").click(function(){
        $("#tab").css("opacity","0");
        $("#wrap3").css("opacity","1");
        $("#menu").css({opacity:"1"});
        $("#menu").css("pointer-events","auto");
        $("#wrap2,#wrap1,#wrap4,#wrap5").css("pointer-events","none");
        setTimeout(function(){
            $("#tab").css("pointer-events","none");
        },700);
    });
    $("#tab .tab4").click(function(){
        $("#tab").css("opacity","0"); 
        $("#wrap4").css("opacity","1");
        $("#menu").css({opacity:"1"});
        $("#menu").css("pointer-events","auto");
        $("#wrap2,#wrap3,#wrap1,#wrap5").css("pointer-events","none");
        setTimeout(function(){
            $("#tab").css("display","none")
        },700);
    });
    $("#tab .tab5").click(function(){
        $("#tab").css("opacity","0"); 
        $("#wrap5").css("opacity","1");
        $("#menu").css({opacity:"1"});
        $("#menu").css("pointer-events","auto");
        $("#wrap2,#wrap3,#wrap4,#wrap1").css("pointer-events","none");
        setTimeout(function(){
            $("#tab").css("display","none")
        },700);
    });
    $("#menu>li .tab1").click(function(){
        var i=$("#wrap2,#wrap3,#wrap4,#wrap5");
        $("#wrap1").css({opacity:"1"});
        $("#wrap1").css("pointer-events","auto");
        i.css("opacity","0");
        i.css("pointer-events","none");
    });
    $("#menu>li .tab2").click(function(){
        var i=$("#wrap1,#wrap3,#wrap4,#wrap5");
        $("#wrap2").css({opacity:"1"});
        $("#wrap2").css("pointer-events","auto");
        i.css("opacity","0");
        i.css("pointer-events","none");
    });
    $("#menu>li .tab3").click(function(){
        var i=$("#wrap2,#wrap1,#wrap4,#wrap5");
        $("#wrap3").css({opacity:"1"});
        $("#wrap3").css("pointer-events","auto");
        i.css("opacity","0");
        i.css("pointer-events","none");
    });
    $("#menu>li .tab4").click(function(){
        var i=$("#wrap2,#wrap3,#wrap1,#wrap5");
        $("#wrap4").css({opacity:"1"});
        $("#wrap4").css("pointer-events","auto");
        i.css("opacity","0");
        i.css("pointer-events","none");
    });
    $("#menu>li .tab5").click(function(){
        var i=$("#wrap2,#wrap3,#wrap4,#wrap1");
        $("#wrap5").css({opacity:"1"});
        $("#wrap5").css("pointer-events","auto");
        i.css("opacity","0");
        i.css("pointer-events","none");
    });
    $("#wrap2 div .next").click(function(){
        contents++;
        $("#wrap2 div .contents."+(contents-1).toString()).css("opacity","0");
        if(contents>10){
            $("#wrap2 div .contents.1").css("opacity","1");
            contents=1;
        }
        else{
            $("#wrap2 div .contents."+contents.toString()).css("opacity","1");
        }
    });
    $("#wrap2 div .back").click(function(){
        contents--;
        $("#wrap2 div .contents."+(contents+1).toString()).css("opacity","0");
        if(contents<1){
            $("#wrap2 div .contents.10").css("opacity","1");
            contents=10;
        }
        else{
            $("#wrap2 div .contents."+contents.toString()).css("opacity","1");
        }
    });
    $("#cover").click(function(){
        $("#cover").css("opacity","0");
        $("#cover").css("pointer-events","none");
    });
    $("#wrap4 div [class^='canvas']").click(function(){
        $("#cover").css("opacity","1");
        $("#cover").css("pointer-events","auto");
    });
    $("#wrap4 div .canvas1").click(function(){
        $("#cover .canvas1").css("opacity","1");
        $("#cover .canvas2").css("opacity","0");
        $("#cover .canvas3").css("opacity","0");
        $("#cover .canvas4").css("opacity","0");
        $("#cover .canvas5").css("opacity","0");
    });
    $("#wrap4 div .canvas2").click(function(){
        $("#cover .canvas1").css("opacity","0");
        $("#cover .canvas2").css("opacity","1");
        $("#cover .canvas3").css("opacity","0");
        $("#cover .canvas4").css("opacity","0");
        $("#cover .canvas5").css("opacity","0");
    });
    $("#wrap4 div .canvas3").click(function(){
        $("#cover .canvas1").css("opacity","0");
        $("#cover .canvas2").css("opacity","0");
        $("#cover .canvas3").css("opacity","1");
        $("#cover .canvas4").css("opacity","0");
        $("#cover .canvas5").css("opacity","0");
    })
    $("#wrap4 div .canvas4").click(function(){
        $("#cover .canvas1").css("opacity","0");
        $("#cover .canvas2").css("opacity","0");
        $("#cover .canvas3").css("opacity","0");
        $("#cover .canvas4").css("opacity","1");
        $("#cover .canvas5").css("opacity","0");
    });
    $("#wrap4 div .canvas5").click(function(){
        $("#cover .canvas1").css("opacity","0");
        $("#cover .canvas2").css("opacity","0");
        $("#cover .canvas3").css("opacity","0");
        $("#cover .canvas4").css("opacity","0");
        $("#cover .canvas5").css("opacity","1");
    });
    $("#wrap5 div img.to_k").click(function(){
        $("#wrap5 div table.to_k").css("opacity","1");
        $("#wrap5 div table.to_d").css("opacity","0");
    });
    $("#wrap5 div img.to_d").click(function(){
        $("#wrap5 div table.to_k").css("opacity","0");
        $("#wrap5 div table.to_d").css("opacity","1");
    });
});
$(window).on("load",function(){
    $(".tab1").css("animation-play-state","running");
    $(".tab2").css("animation-play-state","running");
    $(".tab3").css("animation-play-state","running");
    $(".tab4").css("animation-play-state","running");
    $(".tab5").css("animation-play-state","running");
});