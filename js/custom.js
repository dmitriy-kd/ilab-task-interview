$('.banner').slick({
  autoplay: true,
  arrows: true,
  dots: true,
});

$('.banner-down').slick({
  autoplay: true,
  arrows: true,
  dots: true,
});
/*
let button = document.getElementById('catalog-list-button');
let list = document.getElementsByClassName('catalog-item');

button.onclick = function () {
  button.classList.toggle('up');
  button.classList.toggle('down');

    for (let i = 0; i < list.length; i++) {
    //alert(list[i].className);
    if (list[i].className == 'catalog-item border-light') {
      list[i].className = 'catalog-item border-light none';
      list[i].style.display = 'none';
    } else {
      list[i].className = 'catalog-item border-light';
      list[i].style.display = 'flex';
    }
    
    }

};
*/