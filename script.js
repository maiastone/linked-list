var $siteName = $('.bookmark-site-name');
var $siteURL = $('.bookmark-site-url');
var $createButton = $('.create-button');

function toggleCreate() {
    if ($siteName.val() === '' && $siteURL.val() === '') {
      $createButton.prop('disabled', true);
    } else {
      $createButton.prop('disabled', false);
    }
}

function toggleRead(parentRow){
  parentRow.toggleClass('read');
  changeReadText(parentRow);
}

function changeReadText(buttonText){
  if (buttonText.text() === 'Mark As Read') {
   buttonText.text('Mark As Unread');
  } else {
   buttonText.text('Mark As Read');
 }
}

function addNewBookmark(){
  $('tbody').append(`<tr class="newRow">
     <td class="site-name-cell">${$siteName.val()}</td>
     <td class="site-url-cell"><a href="${$siteURL.val()}">${$siteURL.val()}</a></td>
     <td><button class="markRead">Mark As Read</button></td>
     <td><button class="removeLink">Remove Bookmark</button></td>
   </tr>`);
 }

 function validateUserInput (title, url) {
   if ($.isEmptyObject(title) || $.isEmptyObject(url)) {
     alert('ERROR: Please enter a valid site name and URL.');
   }else {
       addNewBookmark();
     }
 }

 function displayBookmarkCount (){
  $('#total-bookmarks-field').text($('.newRow').length);
 }

 function displayReadBookmarksCount (){
  $('#total-read-bookmarks-field').text($('.read').length);
 }

 function displayUnreadBookmarksCount (){
  var totalUnreadBookmarks = $('.newRow').length - $('.read').length;
  $('#total-unread-bookmarks-field').text(totalUnreadBookmarks);
 }

 function validateURL (){
   if (($siteURL).substr(0, 7) !== "http://" &&
       ($siteURL).substr(0, 8) !== "https://" &&
       ($siteURL).substr(0, 4) !== "www."){
        alert('ERROR: Please enter a valid site URL.');}
  else {
      addNewBookmark();
 }}

 $('.site-input').on('keyup', function(){
   toggleCreate();
 });

 $createButton.on('click', function(event){
  event.preventDefault();
  validateUserInput($siteName.val(), $siteURL.val());
  displayBookmarkCount ();
  });

  $('tbody').on('click', '.removeLink', function(){
    $(this).parents('tr').first().remove();
    displayBookmarkCount ();
    displayReadBookmarksCount ();
    displayUnreadBookmarksCount ();
  });

  $('tbody').on('click','.markRead', function() {
    toggleRead($(this));
    displayReadBookmarksCount ();
    displayUnreadBookmarksCount ();
  });


// Cannot get clear read button to clear
  $('.read').on('click','.clear-read-button',function(){
    $(this).parents('tr').remove();
  });
