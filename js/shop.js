(() => {
  const $shopWrapper = document.getElementById('js-shop-wrapper');
  const $link = document.getElementsByClassName('shop-a');
  console.log($link);
  const $mask = document.getElementById('mask');
  const $modal = document.getElementById('modal');
  const $img = document.getElementById('push-img');
  const $class = document.getElementById('js-class');
  const $location = document.getElementById('js-location');
  const $text = document.getElementById('js-text');


  const shopExplation = [
    {
      classname: 'class0',
      location:  'location0',
      text: 'text0',
      url : 'image/クラス模擬店/1年生.jpg'
    }, {
      classname: 'class1',
      location: 'location1',
      text: 'text1',
      url:
    }, {
      classname: 'class2',
      location: 'location2',
      text: 'text2',
      url
    }, {
      classname: 'class3',
      location: 'location3',
      text: 'text3',
      url
    }, {
      classname: 'class4',
      location: 'location5',
      text: 'text4',
      url
    }, {
      classname: 'class5',
      location: 'location5',
      text: 'text5',
      url
    }, {
      classname: 'class6',
      location: 'location6',
      text: 'text6',
      url
    }, {
      classname: 'class7',
      location: 'location7',
      text: 'text7',
      url
    }, {
      classname: 'class8',
      location: 'location8',
      text: 'text8',
      url
    }, {
      classname: 'class9',
      location: 'location9',
      text: 'text9',
      url
    }, {
      classname: 'class10',
      location: 'location10',
      text: 'text10,
      url'
    }, {
      classname: 'class11',
      location: 'location11',
      text: 'text11,
      url'
    }, {
      classname: 'class12',
      location: 'location12',
      text: 'text12,
      url'
    }, {
      classname: 'class13',
      location: 'location13',
      text: 'text13,
      url'
    }, {
      classname: 'class14',
      location: 'location14',
      text: 'text14,
      url'
    }, {
      classname: 'class15',
      location: 'location15',
      text: 'text15,
      url'
    }, {
      classname: 'class16',
      location: 'location16',
      text: 'text16,
      url'
    }, {
      classname: 'class17',
      location: 'location17',
      text: 'text17,
      url'
    }, {
      classname: 'class18',
      location: 'location18',
      text: 'text18,
      url'
    }, {
      classname: 'class19',
      location: 'location19',
      text: 'text19,
      url'
    }, {
      classname: 'class20',
      location: 'location20',
      text: 'text20,
      url'
    }
  ];

  console.log(shopExplation[0].location);
  $location.textContent = shopExplation[1].location;


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
      $class.textContent = shopExplation[i].classname;
      $location.textContent = shopExplation[i].location;
      $text.textContent = shopExplation[i].text;
    });
  }


  //全てのnav要素に対して関数を適応
    $link[0].addEventListener('click',function(e){
      // e.preventDefault();
  
      $mask.classList.remove('hidden');
      $modal.classList.remove('hidden');
      console.log($class.textContent);
      console.log(0);
      $img.src=shopExplation[0].url;
      $class.textContent = shopExplation[0].classname;
      $location.textContent = shopExplation[0].location;
      $text.textContent = shopExplation[0].text;
      e.preventDefault();
      console.log(0);
    });

    $link[1].addEventListener('click',function(e){
      // e.preventDefault();
  
      // $mask.classList.remove('hidden');
      // $modal.classList.remove('hidden');
      // console.log($class.textContent);
      // console.log(index);
      // $class.textContent = shopExplation[index].classname;
      // $location.textContent = shopExplation[index].location;
      // $text.textContent = shopExplation[index].text;
      e.preventDefault();
      console.log(1);
    });



})();