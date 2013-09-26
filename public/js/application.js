$(document).ready(function(){
  $('.container').on('click','#get_color', function(e) {
    e.preventDefault();
    $.post('/color', function(response) {
      $('ul li:nth-child(' + response.cell + ')').css('background-color', response.color);
    });
  });
});