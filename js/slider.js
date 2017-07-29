function updateYearText() {
    var year = $('body').attr('data-year');
    $("#YearValue").text(year);
}

// Update year text whenever year changes
$('body').bind('change', updateYearText);

// Initialize year text
updateYearText();

// Update the globabl year value when the slider is moved
$("#SliderElement").on("input change", function() {
    var year = $("#SliderElement").val();
    $('body').attr('data-year', year);
});

// Initialise the sliders value
$("#SliderElement").val($('body').attr('data-year'));
