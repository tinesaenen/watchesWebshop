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

// $("select.filterby").change(function() {
//   var filters = $.map($("select.filterby").toArray(), function(e) {
//     return $(e).val();
//   }).join(".");
//   $("div#FilterContainer")
//     .find("div")
//     .hide();
//   $("div#FilterContainer")
//     .find("div." + filters)
//     .show();
// });

// probeersel 4

// $("#filer-1 li").click(function() {
//   $(".filters-filer-1 .filtr").removeClass("filtr-active");
//   $(this).addClass("filtr-active");
//   var filter = $(this).data("fltr");
//   filer1.filterizr("filter", filter);
// });

//probeersel 5
var genderSelector = "";
var propertySelector = "";

var filter = function() {
  var selector = propertySelector + genderSelector;

  if (selector) {
    $(".item").hide();
    $(propertySelector + genderSelector).show();
  } else {
    $(".item").show();
  }
};

$("#gender input").change(function() {
  genderSelector =
    this.value == "men" ? ".men:not(.women)" : ".women:not(.men)";
  filter();
});

$("#property input").change(function() {
  if ($(this).is(":checked")) {
    propertySelector = propertySelector + "." + this.id;
  } else {
    propertySelector = propertySelector.replace("." + this.id, "");
  }
  filter();
});

// this runs on load so the initial view will be pdated
genderSelector =
  $("#gender :checked").val() == "men"
    ? ".men:not(.women)"
    : ".women:not(.men)";
filter();
