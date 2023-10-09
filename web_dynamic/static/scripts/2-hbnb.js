$(document).ready(function () {
  const amenities = {};

  // Handle checkbox changes
  $("li input[type=checkbox]").change(function () {
    if (this.checked) {
      amenities[this.dataset.name] = this.dataset.id;
    } else {
      delete amenities[this.dataset.name];
    }

    // Update the text displayed for selected amenities
    $(".amenities h4").text(Object.keys(amenities).sort().join(", "));
  });

  // Check the status of the API
  $.getJSON("http://0.0.0.0:5001/api/v1/status/", (data) => {
    // If the API status is OK, mark it as available
    if (data.status === "OK") {
      $("div#api_status").addClass("available");
    } else {
      // Otherwise, mark it as unavailable
      $("div#api_status").removeClass("available");
    }
  });
});
