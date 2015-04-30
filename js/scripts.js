//Extend jQuery library
$.fn.extend({
  slideRightShow: function() {
    return this.each(function() {
        $(this).show('slide', {direction: 'right'}, 'slow');
    });
  },
  slideLeftHide: function() {
    return this.each(function() {
      $(this).hide('slide', {direction: 'left'}, 'slow');
    });
  },
  slideRightHide: function() {
    return this.each(function() {
      $(this).hide('slide', {direction: 'right'}, 'slow');
    });
  },
  slideLeftShow: function() {
    return this.each(function() {
      $(this).show('slide', {direction: 'left'}, 'slow');
    });
  },
  slideUpShow: function() {
    return this.each(function() {
        $(this).show('slide', {direction: 'up'}, 'slow');
    });
  },
  slideUpHide: function() {
    return this.each(function() {
      $(this).hide('slide', {direction: 'up'}, 'slow');
    });
  },
  slideDownHide: function() {
    return this.each(function() {
      $(this).hide('slide', {direction: 'down'}, 'slow');
    });
  },
  slideDownShow: function() {
    return this.each(function() {
      $(this).show('slide', {direction: 'down'}, 'slow');
    });
  }
});

$(document).foundation({

});

$(document).ready(function(){
  $('button').on('click', function(){
    $('#intro').slideLeftShow();
  });
});
