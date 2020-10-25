$("a").lightbox();

$(window).on("open.lightbox", function() {
  // ...
}).on("close.lightbox", function() {
  // ...
});

$(".lightbox").lightbox({
  thumbnails: true
  fixed: true
formatter: formatLightboxCaption
});

function formatLightboxCaption() {
  return "<h3>" + $(this).attr("title") + "</h3>";
});