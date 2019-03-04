$(document).ready(function() {
  var content = $('.content');
  content.load('home.html');

  // apprently this method -> jquery load functions are deprecated, due to performance
  // will convert to ajax calls later #TODO
  // one thing im not sure how to do right now is how to route links properly with
  //individual urls. something i was used to with rails, but not raw js/jquery yet.
  function load_content() {
    // target is the data-target html attribute.
    var $this = $(this),
        target = $this.data('target');
    content.load(target + '.html');

    // stops normal link behavior of the href. i.e. href="#" or "/about.html"
    return false;
  }

  $('.sidebar ul li a').on('click', load_content);
  $('.footer ul li a').on('click', load_content);

});
