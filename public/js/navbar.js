function c(e) { console.log(e); }

function loadSidebar() {
  $('#sidebar-wrapper').css('width',0);
};

function clearSidebar() {
  $('#sidebar-wrapper').animate({width: 10, opacity: 0.2}, {duration: 'fast'}, 'swing', function(){
  });
};

function showSidebar() {
  $('#sidebar-wrapper').animate({width: '200', opacity: 0.7}, {duration: 'fast'}, 'swing', function(){
  });
};


$(function() {
  var animation = false;
  var menu_open = false;

  //hide the navbar
  loadSidebar();

  //navbar hovering effect
  $('body').on('mousemove', function(event) {

    var position_mouse_x = event.clientX;
    if (animation) {
      return;
    }
    if (position_mouse_x <= 200 && !menu_open) {
      showSidebar();
      menu_open = true;
    } else if (position_mouse_x > 200 && menu_open) {
      clearSidebar();
      menu_open = false;
    };


  })
});
