const mole = document.querySelector('.mole');


function showMole() {
  mole.classList.add('show');
  mole.classList.remove('hide');
}

function hideMole() {
  mole.classList.add('hide');
  mole.classList.remove('show');
}

// 示例：每隔2秒钟出现和隐藏地鼠
setInterval(() => {
  showMole();
  setTimeout(hideMole, 1000);
}, 2000);
