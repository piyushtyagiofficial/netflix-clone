//when in Faq opened,close all other faq
function closeAllFaq(n) {
  for(var i=1; i<=6; i++) {
    if(n===i) { 
      toggle(i);
    }else {
      remove(i);
      $(".ans" + i).slideUp();
    }
  }
}

//function for rotating +
function toggle(x) {
  $(".q" + x + " .plus").toggleClass("plusToggle");
 }
 function remove(x) {
  $(".q" + x + " .plus").removeClass("plusToggle");
 }

//Slide Toggling for FAQ
$(".q1").on("click",function() {
  $(".ans1").slideToggle();
  closeAllFaq(1);
});

$(".q2").on("click",function() {
  $(".ans2").slideToggle();
  closeAllFaq(2);
});

$(".q3").on("click",function() {
  $(".ans3").slideToggle();
  closeAllFaq(3);
});

$(".q4").on("click",function() {
  $(".ans4").slideToggle();
  closeAllFaq(4);
});

$(".q5").on("click",function() {
  $(".ans5").slideToggle();
  closeAllFaq(5);
});

$(".q6").on("click",function() {
  $(".ans6").slideToggle();
  closeAllFaq(6);
});


  
