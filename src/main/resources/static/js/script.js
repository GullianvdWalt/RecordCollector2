// Created By Gullian Van Der Walt
// Get New Record Modal
var newModal = document.getElementById("newRecordModal");

var open = document.getElementById("newRecordBtn");

var editModal = document.getElementById("recordEditModal");

var deleteModal = document.getElementById("deleteModal");
//Open Modal
$(document).ready(function () {

  $('#newRecordBtn').click(function () {
    newModal.style.display = "block";

  });

});
//Close Modal
$(document).ready(function () {

  $('#cancel').click(function () {
    newModal.style.display = "none";
  });

  // Delete Modal, Confirm Delete
  $('table #deleteButton').on('click', function (event) {
    deleteModal.style.display = "block";
    event.preventDefault();
    var href = $(this).attr('href');
    $('#confirmDelete').attr('href', href);
    $("#deleteModal").modal();
  });

});


$(document).ready(function () {
  $("#close").click(function () {
    editModal.style.display = "none";
  });

  $("table #editButton").click(function () {
    editModal.style.display = "block";
    window.location.hash = '#recordEditModal';
    event.preventDefault();
    // URL for EDIT /findByID/?id=1
    //Current Button (edit)
    var href = $(this).attr('href');
    $.get(href, function (records, status) {
      $('#idEdit').val(records.id);
      $('#artistEdit').val(records.artist);
      $('#albumEdit').val(records.album);
      $('#catNumEdit').val(records.catalog_number);
      $('#formatEdit').val(records.format);
      $('#cover_conditionEdit').val(records.cover_condition);
      $('#record_conditionEdit').val(records.record_condition);
      $('#pressingEdit').val(records.pressing);
      $('#remarksEdit').val(records.remarks);
      $('#yearEdit').val(records.year);
      if ($('#onDiscogsEdit') == true) {
        records.on_discogs = true;
      } else {
        records.on_discogs = false;
      }
      $('#discogsLinkEdit').val(records.discogs_link);
    });
    jQuery('#recordEditModal').modal();
    $('#recordEditModal').modal();

  });;

});

// Scroll To Top
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

