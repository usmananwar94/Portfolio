/*when the document finishes loading */
$(document).ready(function(){
    var loading = $(".loading");
    loading.delay(loading.attr("delay-hide")).slideUp();
  });