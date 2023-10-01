(() => {

  const $button = document.getElementsByClassName('buttons');
  const $top = document.getElementById('js-top');
  const $mogi = document.getElementById('js-mogi');
  const $flyer = document.getElementById('js-flyer');
  const $scheMap = document.getElementById('js-scheMap');


  const init = () => {
    $top.classList.toggle("hidden");
  };
  init();

  // for (let i = 0; i < $button.length; i++) {
  //   $button[i].addEventListener('click', function () {
  //     $top.classList.toggle("hidden");
  //   });
  // }

  $button[0].addEventListener('click', function () {
    $top.classList.toggle("hidden");
  });
  $button[1].addEventListener('click', function () {
    $mogi.classList.toggle("hidden");
  });
  $button[2].addEventListener('click', function () {
    $flyer.classList.toggle("hidden");
  });
  $button[3].addEventListener('click', function () {
    $scheMap.classList.toggle("hidden");
  });

})();