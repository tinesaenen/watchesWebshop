//all jQuery code die ik schreef

// probeersel 1

// $(function() {
//   $(".kids-checkbox").click(function() {
//     $(".kids").toggle("fast");
//   });
// });

// $(function() {
//   $(".numbers-checkbox").click(function() {
//     $(".numbers").toggle("fast");
//   });
// });

// probeersel 2

// $(".kids").show();
// $(".kids-checkbox").click(function() {
//   if ($(this).is(":checked")) {
//     $(".kids").show();
//   } else {
//     $(".kids").hide();
//   }
// });

// $(".numbers").show();
// $(".numbers-checkbox").click(function() {
//   if ($(this).is(":checked")) {
//     $(".numbers").show();
//   } else {
//     $(".numbers").hide();
//   }
// });

// probeersel 3

$("select.filterby").change(function() {
  var filters = $.map($("select.filterby").toArray(), function(e) {
    return $(e).val();
  }).join(".");
  $("div#FilterContainer")
    .find("div")
    .hide();
  $("div#FilterContainer")
    .find("div." + filters)
    .show();
});
