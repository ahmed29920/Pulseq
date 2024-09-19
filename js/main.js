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
