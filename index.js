$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

new fullpage('#fullpage', {
  sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
});

//adding the action to the button
$(document).on('click', '#moveDown', function(){
  fullpage_api.moveSectionDown();
});
