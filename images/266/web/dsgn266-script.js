Splitting();

ScrollOut({
  threshold: .2,
  once: true });

// hover blur
var blur;

if ('-webkit-filter' in document.body.style) {
	blur = 'filter';    
} else {
    blur = 'shadow';
}

$(document).ready(function(){
    $('.text').hover(function(){
        $(this).addClass(blur);
    }).mouseout(function(){
        $(this).removeClass(blur);
    });
});


// background change
$( window ).ready(function() {
  
    var wHeight = $(window).height();

    $('.slide')
      .height(wHeight)
      .scrollie({
        scrollOffset : -50,
        scrollingInView : function(elem) {
                   
          var bgColor = elem.data('background');
          
          $('body').css('background-color', bgColor);
          
        }
      });

  });