'use strict';
$('#stats').hide();

// How many combinations of 3 objects you can make from n objects
var nChoose3 = function(n) {
  return n*(n-1)*(n-2)/6;
};

// How many pairs of objects you can choose from n objects
var nChoose2 = function(n) {
  return n*(n-1)/2;
};

// Calculate and update the threesome statistics
var updateThreesomes = function() {

  // Count the threesome participants
  var guys = parseInt($('#guys').val()) || 0;
  var girls = parseInt($('#girls').val()) || 0;
  var others = parseInt($('#others').val()) || 0;
  var totalPeople = guys + girls + others;

  // If we have enough people for a threesome:
  if (guys >= 0 && girls >= 0  && others >= 0 && guys + girls + others >= 3) {

    // Calculate the basic (male/female) threesomes
    var mmm = nChoose3(guys);
    var fff = nChoose3(girls);
    var mmf = girls*nChoose2(guys);
    var ffm = guys*nChoose2(girls);

    // Update text
    $('#mmm').text(mmm);
    $('#fff').text(fff);
    $('#mmf').text(mmf);
    $('#ffm').text(ffm);
    $('#total-people').text(totalPeople);
    $('#unique-threesomes').text(nChoose2(totalPeople-1));

    // Only update/show threesomes with non-binary people if there's some present:
    if (others > 0) {

      // Calculate our numbers
      var mmo = others*nChoose2(guys);
      var fmo = others*girls*guys;
      var ffo = others*nChoose2(girls);
      var foo = girls*nChoose2(others);
      var moo = guys*nChoose2(others);
      var ooo = nChoose3(others);

      // Update text
      $('#mmo').text(mmo);
      $('#fmo').text(fmo);
      $('#ffo').text(ffo);
      $('#foo').text(foo);
      $('#moo').text(moo);
      $('#ooo').text(ooo);

      $('#nonbinary').show();
    } else {
      $('#nonbinary').hide();
    }

    // Show the text
    $('#stats').show();
  } else {
    $('#stats').hide();
  }
};

// Call updateThreesomes() whenever the user changes the numbers
$('#guys').change(updateThreesomes);
$('#girls').change(updateThreesomes);
$('#others').change(updateThreesomes);