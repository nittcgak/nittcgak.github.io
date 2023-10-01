(() => {

  const $button = document.getElementsByClassName('buttons');
  const $main = document.getElementById('js-main');
  const $content = $main.querySelectorAll('[data-content]');

  //初期化
  const init = () => {
    $content[0].classList.remove("hidden");
  };
  init();

  for (let i = 0; i < $button.length; i++) {
    $button[i].addEventListener('click', function () {
      for(let j=0;j<$button.length;j++){
        $content[j].classList.add("hidden");
      }
      $content[i].classList.remove("hidden");
    });
  }

})();