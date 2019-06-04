new WOW({
mobile:       false

}).init();
const player = new Plyr('#player');
$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
});
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
}
//$(".btn-record").click(function() { 
//       var btnimg = $("#record-start");
//       var current = btnimg.attr("src");
//       var swap = btnimg.attr("data-swap");     
//     btnimg.attr('src', swap).attr("data-swap",current);   
//});
$(".btn-record").click(function () {
    ($(".record-btn-txt").text() == "Record") ? $(".record-btn-txt").text("Stop") : $(".record-btn-txt").text("Record");
    $(this).toggleClass('recording')
});