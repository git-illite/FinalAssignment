/*
  Abdalla Aden 
  021-720-057
*/
function validate(event) {
  const form = document.querySelector("form");
  const Latitude = form.Latitude.value;
  const Longitude = form.Longitude.value;
 
  var LatitudeErrors = document.querySelector("#LatitudeError");
  var LongitudeErrors = document.querySelector("#LongitudeError");
  
  if ((isNaN(Latitude)) || (parseInt(Latitude) < -90) || (parseInt(Latitude) > 90)) {
    LatitudeErrors.innerText = " must be a valid Latitude (-90 to 90)";
    return false;
  }
  else if ((isNaN(Longitude)) || (parseInt(Longitude) < -180) || (parseInt(Longitude) > 180)) {
    LongitudeErrors.innerText = " must be a valid Longitude (-180 to 180)";
    return false;
  }
  return true;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
