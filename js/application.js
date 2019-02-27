$(document).ready(function() {
  var content = $('.content');
  content.load('home.html');

  // apprently this method -> jquey load functions are deprecated, due to performance
  // will convert to ajax calls later #TODO
  function load_content() {
    // target is the data-target html attribute.
    var $this = $(this),
        target = $this.data('target');
    content.load(target + '.html');

    // stops normal link behavior of the href. i.e. href="#" or "/about.html"
    return false;
  }

  $('.sidebar ul li a').on('click', load_content);

});
