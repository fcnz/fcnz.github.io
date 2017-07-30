function updateYearText() {
    var year = observables.year;
    $("#YearValue").text(year);
}

// Update year text whenever year changes
yearObservers.push(updateYearText);

// Initialize year text
updateYearText();

// Update the globabl year value when the slider is moved
$("#SliderElement").on("input change", function() {
    var year = $("#SliderElement").val();
    setYear(year);
});

// Initialise the sliders value
$("#SliderElement").val(observables.year);
