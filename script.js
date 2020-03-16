$(document).ready(function(){
  $(".klik").click(function(){
    $(".on").toggle(500);
  // alert('ok');
  });
});



const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');
const card3 = document.querySelector('.card-3');
const linkA = document.querySelector('.link-a');
const linkB = document.querySelector('.link-b');



linkA.addEventListener('click',function() {
    card1.classList.toggle('geser');
    card2.classList.toggle('geser');
    card3.classList.toggle('geser');
});

linkB.addEventListener('click',function() {
  card1.classList.toggle('active');
  card2.classList.toggle('active');
  card3.classList.toggle('active');
});
