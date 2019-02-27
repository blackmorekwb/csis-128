$(document).ready(function() {
  var content = $('.content');

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
