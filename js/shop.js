(() => {
  const $shopWrapper = document.getElementById('js-shop-wrapper');
  const $link = $shopWrapper.querySelectorAll('[data-link]');
  const $mask = document.getElementById('mask');
  const $modal = document.getElementById('modal');
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
    }
  ];

  console.log(shopExplation[0].location);
  $location.textContent = shopExplation[1].location;


  $mask.addEventListener('click', () => {
    $mask.classList.add('hidden');
    $modal.classList.add('hidden');
  });

  //クリックされた時の挙動
  

  //全てのnav要素に対して関数を適応
  for(let index=0;index<$link.length;index++) {
    $link[index].addEventListener('click', (e) => {
      e.preventDefault();
  
      $mask.classList.remove('hidden');
      $modal.classList.remove('hidden');
      console.log($class.textContent);
      $class.textContent = shopExplation[index].classname;
      $location.textContent = shopExplation[index].location;
      $text.textContent = shopExplation[index].text;
    });
    index++;
  }


})();