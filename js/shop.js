(() => {
  const $link = document.getElementsByClassName('shop-a');
  const $mask = document.getElementById('mask');
  const $modal = document.getElementById('modal');
  const $img = document.getElementById('push-img');
  const $class = document.getElementById('js-class');
  const $location = document.getElementById('js-location');
  const $text = document.getElementById('js-text');


  const shopExplation = [
    {
      classname: '1年生',
      location:  '1年生教室',
      text: 'あるところに炎と呼ばれる者の屋敷があった。そこの家主は界といいとても温和な男だった。その性格からかその屋敷に勤める多くの臣下たちから慕われていた。そこは、幸せに満ちていた。あの日までは・・・あの日の記憶を追体験しませんか？',
      url:"image/クラス模擬店/1年生.jpg"
    }, {
      classname: 'CA2',
      location: 'location1',
      text: 'text1',
      url:"image/クラス模擬店/CA2.jpg"
    }, {
      classname: 'IE2',
      location: 'location2',
      text: 'text2',
      url:"image/クラス模擬店/IE2.jpg"
    }, {
      classname: 'ME2',
      location: 'location2',
      text: 'text2',
      url:"image/クラス模擬店/ME2.png"
    },{
      classname: 'CA3',
      location: 'location2',
      text: 'text2',
      url:"image/クラス模擬店/CA3.png"
    },
    
    {
      classname: 'IE3',
      location: 'location3',
      text: 'text3',
      url:"image/クラス模擬店/IE3 塩味.jpg"
    }, {
      classname: 'ME3',
      location: 'location5',
      text: 'text4',
      url:"image/クラス模擬店/ME3.jpg"
    }, {
      classname: 'CA4',
      location: 'location5',
      text: 'text5',
      url:"image/クラス模擬店/CA4.JPEG"
    }, {
      classname: 'IE4',
      location: 'location6',
      text: 'text6',
      url:"image/クラス模擬店/IE4.PNG"
    }, {
      classname: 'IE5',
      location: 'location7',
      text: 'text7',
      url:"image/クラス模擬店/IE5.jpg"
    }, {
      classname: 'IE企画',
      location: 'location8',
      text: 'text8',
      url:"image/クラス模擬店/IE企画.jpeg"
    }, {
      classname: 'ME企画',
      location: 'location9',
      text: 'text9',
      url:"image/クラス模擬店/ME企画.jpeg"
    }, {
      classname: 'サッカー部',
      location: 'location10',
      text: 'text10',
      url:"image/部活模擬店/サッカー部.jpg"
    }, {
      classname: 'テラス計画',
      location: 'location11',
      text: 'text11',
      url:"image/部活模擬店/テラス計画.jpg"
    }, {
      classname: 'ニューメディア部',
      location: 'location12',
      text: 'text12',
      url:"image/部活模擬店/ニューメディア部.jpg"
    }, {
      classname: 'バドミントン部',
      location: 'location13',
      text: 'text13',
      url:"image/部活模擬店/バドミントン部.jpg"
    }, {
      classname: '園芸同好会',
      location: 'location14',
      text: 'text14',
      url:"image/部活模擬店/園芸同好会.png"
    }, {
      classname: '写真部',
      location: 'location15',
      text: 'text15',
      url:"image/部活模擬店/写真部.png"
    }, {
      classname: '吹奏楽部',
      location: 'location16',
      text: 'text16',
      url:"image/部活模擬店/吹奏楽.jpg"
    }, {
      classname: '卓球部',
      location: 'location17',
      text: 'text17',
      url:"image/部活模擬店/卓球部.JPG"
    }, {
      classname: '男子バスケ部',
      location: 'location18',
      text: 'text18',
      url:"image/部活模擬店/男子バスケ部.png"
    }, {
      classname: '伝統文化同好会',
      location: 'location19',
      text: 'text19',
      url:"image/部活模擬店/伝統文化同好会.JPG"
    }, {
      classname: '美術部',
      location: 'location20',
      text: 'text20',
      url:"image/部活模擬店/美術部.jpg"
    },{
      classname: '文芸部',
      location: 'location20',
      text: 'text20',
      url:"image/部活模擬店/文芸部.png"
    },{
      classname: '茶道部',
      location: 'location20',
      text: 'text20',
      url:"image/部活模擬店/文芸部.png"//url偏向
    },{
      classname: 'メカトロシステム部',
      location: 'location20',
      text: 'text20',
      url:"image/部活模擬店/文芸部.png"
    }
  ];

  $mask.addEventListener('click', () => {
    $mask.classList.add('hidden');
    $modal.classList.add('hidden');
  });

  //クリックされた時の挙動
  for (let i = 0; i < $link.length; i++) {
    $link[i].addEventListener('click', function (e) {
      e.preventDefault();
      $mask.classList.remove('hidden');
      $modal.classList.remove('hidden');
      $img.src=shopExplation[i].url;
      $class.textContent = shopExplation[i].classname;
      $location.textContent = shopExplation[i].location;
      $text.textContent = shopExplation[i].text;
    });
  }
})();