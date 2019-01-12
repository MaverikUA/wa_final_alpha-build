import './coffee_shop.scss';


var list = document.getElementsByClassName ('combo__product_list-item');
for (var i = 0; i < list.length; i++) {
  list[i].style.position = 'relative';
  var span = document.createElement('span');
  // обычно лучше использовать CSS-классы,
  // но этот код - для удобства разработки, так что не будем трогать стили
  span.style.cssText = 'position:absolute;left:0;top:0';
  span.innerHTML = i + 1;
  list[i].appendChild(span);
}


/* конфигурация */
var width = 350; // ширина изображения
var count = 3; // количество изображений

var carusel = document.getElementById('carusel');
var listing = carusel.querySelector ('ul');
var listElems = carusel.querySelectorAll('li');

var position = 0; // текущий сдвиг влево

carusel.querySelector('.prev').onclick = function() {
  // сдвиг влево
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position + width * count, 0)
  listing.style.marginLeft = position + 'px';
  
};

carusel.querySelector('.next').onclick = function() {
  // сдвиг вправо
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position - width * count, -width * (listElems.length - count));
  listing.style.marginLeft = position + 'px';
};


document.getElementById('slider-right').onclick = sliderRight;
var left = 0;

function sliderRight() {
  let polosa = document.getElementById('polosa');
  let prevButton = document.getElementById('sliderleft');
  left = left - 1200;
  if (left < -2400) {
    left = 0;
  } else if (left >= -1200) {
    prevButton.style.display = 'block';
  }
  console.log(left);
  polosa.style.left = left+'px';
}


document.getElementById('sliderleft').onclick = sliderLeft;
var left = 0;

function sliderLeft() {
  let polosa = document.getElementById('polosa');
  
  left = left + 1200;
  if (left > 0) {
    left = 0;
    
  } 
  polosa.style.left = left+'px';
}
console.log(left);



window.onload = function() {
  document.querySelector('.tabs-header').addEventListener('click', fTabs);

  function fTabs(event) {
    console.log(event)
    if (event.target.className == 'tab-h') {
      var dataTab = event.target.getAttribute('data-tab');
      var tabH = document.getElementsByClassName('tab-h');
      for (var i=0; i<tabH.length; i++) {
        tabH[i].classList.remove('active');
      }
      
      
      event.target.classList.add('active');
      var tabBody = document.getElementsByClassName('tab-b');
      for (var i = 0; i < tabBody.length; i++) {
         if (dataTab==i) {
           tabBody[i].style.display = 'flex';
         } else {
          tabBody[i].style.display = 'none';
         }
      }
    }
  }
}





var cartCount = document.getElementsByClassName("buy");
 

  for (var i = 0; i < cartCount.length; i++) {
    cartCount[i].onclick = function() {
    i = i + 1;
  document.getElementById("cart_count").innerHTML = i;
  };
}

