$(document).on('click', function(event) {
  // Check if the click happened on the #nav-user-image or inside the dropdown
  if ($(event.target).closest('#nav-user-image, .nav-menu').length === 0) {
    // Clicked outside, remove the 'show' class
    $('.nav-menu').removeClass('show');
  }
});

$(document).on('click', '#nav-user-image', function(event) {
  event.stopPropagation();  // Prevent the document click from closing the menu immediately
  $('.nav-menu').toggleClass('show');
});

$(document).on('click', '.edit-btn', function() {
  $(this).prop('disabled',true);
  $('.form-control').prop('disabled',false);
  $('.form-select').prop('disabled',false);
  $('.save-btn').removeClass('d-none');
});

$(document).on('click','.history-btn',function(){
  $('.start-quests-btn').removeClass('active-history-div');
  $('.reported-quests-btn').removeClass('active-history-div')
  $(this).addClass('active-history-div')
  $('.history-table').removeClass('d-none');
  $('.clearfix').removeClass('d-none');
  $('.stared-div').addClass('d-none');
  $('.reported-div').addClass('d-none');

})
$(document).on('click','.start-quests-btn',function(){
  $('.history-btn').removeClass('active-history-div');
  $('.reported-quests-btn').removeClass('active-history-div')
  $(this).addClass('active-history-div')
  $('.history-table').addClass('d-none');
  $('.stared-div').removeClass('d-none');
  $('.clearfix').addClass('d-none');  
  $('.reported-div').addClass('d-none');

})
$(document).on('click','.reported-quests-btn',function(){
  $('.history-btn').removeClass('active-history-div');
  $('.start-quests-btn').removeClass('active-history-div')
  $(this).addClass('active-history-div')
  $('.history-table').addClass('d-none');
  $('.clearfix').addClass('d-none');
  $('.stared-div').addClass('d-none');
  $('.reported-div').removeClass('d-none');


})
$(document).on('click','.star-div',function(){
  if($(this).hasClass('starred')){
    $(this).removeClass('starred')
    $(this).empty().append(`<i class="fa-regular fa-star fa-lg text-warning"></i>`)

  }else{
    $(this).addClass('starred')
    $(this).empty().append(`<i class="fa-solid fa-star fa-lg text-warning"></i>`)

  }
})
$(document).on('click','.option',function(){
  $(this).addClass('selected-option')
  $(this).siblings().removeClass('selected-option')
})
$(document).on('click','.remove-notification',function(){
  $(this).parent().parent().remove()
})