(() => {
  const $button = document.getElementsByClassName('mogi-button');
  const $contents = document.getElementsByClassName('js-mogi-wrapper');

  //初期化
  const init = () => {
    $contents[0].classList.remove("hidden");
    for(let i=1;i<$button.length;i++){
      $button[i].classList.add("mogi-button-negactive");
    }
  };
  init();

  for (let i = 0; i < $button.length; i++) {
    $button[i].addEventListener('click', function () {
      for(let j=0;j<$button.length;j++){
        $contents[j].classList.add("hidden");
        $button[j].classList.add("mogi-button-negactive");
      }
      $contents[i].classList.remove("hidden");
      $button[i].classList.remove("mogi-button-negactive");
    });
  }


})();