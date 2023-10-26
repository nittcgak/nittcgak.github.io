(() => {

  const $button = document.getElementsByClassName('buttons');
  const $main = document.getElementById('js-main');
  const $space = document.getElementById('header-space');
  const $content = $main.querySelectorAll('[data-content]');

  //初期化
  const init = () => {
    $content[0].classList.remove("hidden");
    $button[0].classList.add("button-active");
    $space.classList.add("hidden");
  };
  init();

  for (let i = 0; i < $button.length; i++) {
    $button[i].addEventListener('click', function () {
      window.scrollTo({
        top: 0,
      });
      for(let j=0;j<$button.length;j++){
        $content[j].classList.add("hidden");
        $button[j].classList.remove("button-active");
      }
      if(i===0){
        $space.classList.add("hidden");
      }else{
        $space.classList.remove("hidden");
      }
      $content[i].classList.remove("hidden");
      $button[i].classList.add("button-active");
    });
  }

})();