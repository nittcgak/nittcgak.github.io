var contents = document.getElementsByClassName("contents");
var menu = new Vue({
    el: '#menu',
    data: {
        items: [{ id: 1, image: "./Image/home.png" }, { id: 2, image: "./Image/about.png" }, { id: 3, image: "./Image/main.png" }, { id: 4, image: "./Image/guide.png" }, { id: 5, image: "./Image/access.png" },  { id: 6, image: "./Image/pdf.png" }]
    },
    methods: {
        changeContents: function (event) {
            var id = event.target.id;
            if(id == 6){
                window.open('./pdfjs/web/viewer.html?file=../../pamphlet.pdf', '_blank');
                //window.open('<絶対パス>', '_blank');ローカル用
            }
            else {
                for (var i = 0; i < 5; i++) {
                    if (i + 1 != id) {
                        contents[i].style.display = "none";
                    } else {
                        contents[i].style.display = "block";
                    }
                }    
            }
        }
    }
});
var introduce = new Vue({
    el: "#introduce",
    data:
    {
        list: [
            {name: "案内", comment: "案内部署長の福田菜々花です。案内部署では主に正面看板のデザインや設置をします。今年は階段アートとEZゾーンの装飾がありませんが、その分部署員のみんなで素敵な看板を作り上げました！楽しみに待っていて下さい♪",idx: 0
            },
            { name: "演出", comment: "演出部署は高専祭の締めであるファッションショーを企画する部署です！感染症対策を十分した上で皆様を楽しませれるような企画を考えてますので、ぜひご期待ください！",idx: 1
            },
            { name: "会場", comment: "会場部署の主な仕事は高専祭前日企画の企画、運営、当日の交通整備です。 前日は学内全体を盛り上げ、当日は部署員の優しさと気遣いでピースフルでハートフルな高専祭をお届けします！",idx: 2
            },
            { name: "広報", comment: "広報部署は「Power of Power 〜力こそ力〜」というテーマのもと、パンフレットとポスターを作成しました！企画紹介や地図などのお役立ち紹介から支援してくださったスポンサー企業、部署員で描いたの挿絵など様々なものが掲載されています！ぜひ目を通してみてください✨",idx: 3
            },
            { name: "ステージ", comment: "今年度は駐車場にステージを設置します！みんなが体を張り、汗と涙を流しながら煌めく姿をぜひご覧ください！",idx: 4
            },
            { name: "スポンサー", comment: "皆さんこんにちは！スポンサー部署です。夏休みからスポンサー活動を始め、様々な方に協力していただきました。ありがとうございました。",idx: 5
            },
            { name: "美化", comment: "美化部署はカウントダウン看板作成を行いました。今年はゴミ箱の設置はありません。当日は献血の呼びかけをします。皆様のご協力をお願いします！",idx: 6
            },
            { name: "バザー", comment: "今年はコロナの関係で食品を扱うバザーが中止になり、例年と比べると少し物足りなさがありますが、1年生・2年生・CA3ではそれぞれ出し物を行うので是非遊びに来てください！",idx: 7
            },
            { name: "メイン", comment: "今年のメイン企画のテーマは、「【潜入】ワクチンを手に入れろ」です。謎を解きながらさまざまなトラップをクリアしていく体験型謎解き脱出ゲームとなっています。高専祭を少しでも盛り上げようと、部署員一同、毎日準備に励んでいます！高専祭当日はぜひ、創造演習スペース（2）までお越しください！！ ",idx: 8
            },
            { name: "ロボコン", comment: "こんにちは、ロボコン部署です。\n例年と違い高専祭とは別日ですが、たぶんきっとおもしろいと思うので、ぜひ参加みてください。 ",idx: 9
            }
        ]
    },
});

var map_cover = document.getElementById("guide_cover");
var map_parts = document.getElementsByClassName("map");
Array.prototype.forEach.call(map_parts, function (element) {
    element.addEventListener("click", function (event) {
        var image = event.target.getAttribute("src");
        var img = document.createElement("img");
        img.setAttribute("src", image);
        map_cover.innerHTML = "";
        map_cover.appendChild(img);
        map_cover.style.display = "block";
    })
});
var access=document.querySelectorAll(".time_to_d img");
Array.prototype.forEach.call(access,function(element){
    element.addEventListener("click", function (event) {
        var image = event.target.getAttribute("src");
        var img = document.createElement("img");
        img.setAttribute("src", image);
        map_cover.innerHTML = "";
        map_cover.appendChild(img);
        map_cover.style.display = "block";
    })
})
map_cover.addEventListener("click", function () {
    this.style.display = "none";
});
var index=0;
var departs=document.getElementsByClassName("depart");

var buttons=document.getElementsByClassName("buttons");
Array.prototype.forEach.call(buttons,function(button,id){
    button.addEventListener("click",function(){
        // console.log(id);
        if(id==0){//backがid = 0
            if(index==0){
            index=9;
            }else{
                index--;
            }
        }else{//nextがid = 1
            if(index==9)
            index=0;
            else{
                index++;
            }
        }
        for(var i = 0; i < 10; i++){
            if(i == index){
                departs[i].style.display = "block";
            }
            else departs[i].style.display = "none";
        }
       // departs.style.transform="translateX(-"+index+"0%)";
    });
})

