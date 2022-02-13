function formatState (state) {
    if (!state.id) {
      return state.text;
    }
  
    var baseUrl = "/user/pages/images/flags";
    var $state = $(
      '<span><img class="img-flag" /> <span></span></span>'
    );
  
    // Use .text() instead of HTML string concatenation to avoid script injection issues
    $state.find("span").text(state.text);
    $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".png");
  
    return $state;
  };
  
  $(".js-example-templating").select2({
    templateSelection: formatState
  });