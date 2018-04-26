$(function(){
  $('ul.parent > li').hover(function(){
    $(this).find('ul.child').show(300);
  }, function(){
    $(this).find('ul.child').hide(300);
  });
});
