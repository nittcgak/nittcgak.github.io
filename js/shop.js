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
      classname: 'class0',
      location:  'location0',
      text: 'text0' 
    }, {
      classname: 'class1',
      location: 'location1',
      text: 'text1'
    }, {
      classname: 'class2',
      location: 'location2',
      text: 'text2'
    }, {
      classname: 'class3',
      location: 'location3',
      text: 'text3'
    }, {
      classname: 'class4',
      location: 'location5',
      text: 'text4'
    }, {
      classname: 'class5',
      location: 'location5',
      text: 'text5'
    }, {
      classname: 'class6',
      location: 'location6',
      text: 'text6'
    }, {
      classname: 'class7',
      location: 'location7',
      text: 'text7'
    }, {
      classname: 'class8',
      location: 'location8',
      text: 'text8'
    }, {
      classname: 'class9',
      location: 'location9',
      text: 'text9'
    }, {
      classname: 'class10',
      location: 'location10',
      text: 'text10'
    }, {
      classname: 'class11',
      location: 'location11',
      text: 'text11'
    }, {
      classname: 'class12',
      location: 'location12',
      text: 'text12'
    }, {
      classname: 'class13',
      location: 'location13',
      text: 'text13'
    }, {
      classname: 'class14',
      location: 'location14',
      text: 'text14'
    }, {
      classname: 'class15',
      location: 'location15',
      text: 'text15'
    }, {
      classname: 'class16',
      location: 'location16',
      text: 'text16'
    }, {
      classname: 'class17',
      location: 'location17',
      text: 'text17'
    }, {
      classname: 'class18',
      location: 'location18',
      text: 'text18'
    }, {
      classname: 'class19',
      location: 'location19',
      text: 'text19'
    }, {
      classname: 'class20',
      location: 'location20',
      text: 'text20'
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
      $class.textContent = shopExplation[i].classname;
      $location.textContent = shopExplation[i].location;
      $text.textContent = shopExplation[i].text;
    });
  }
})();