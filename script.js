// when user inputs new bookmark, it will display in user-bookmarks

// var siteName = document.querySelector('.bookmark-site-name');
//
// var siteURL = document.querySelector('.bookmark-site-url');


$('.create-button').on('click', function(event){
  event.preventDefault();
  var siteName = $('.bookmark-site-name').val();
  // console.log(siteName);});
$('#test1').text(siteName);

  var siteURL = $('.bookmark-site-url').val();
  // console.log(siteURL);});
  $('#test').text(siteURL);

});
