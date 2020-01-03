//all jQuery code die ik schreef

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

genderSelector =
  $("#gender :checked").val() == "men"
    ? ".men:not(.women)"
    : ".women:not(.men)";
filter();
