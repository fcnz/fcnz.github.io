function updateYearText() {
    var year = $('#DataYear').attr('data-year');
    $("#YearValue").text(year);
}

// Update year text whenever year changes
$('#DataYear').bind('change', updateYearText);

// Initialize year text
updateYearText();

// Update the globabl year value when the slider is moved
$("#SliderElement").on("input change", function() {
    var year = $("#SliderElement").val();
    $('#DataYear').attr('data-year', year);
});

// Initialise the sliders value
$("#SliderElement").val($('#DataYear').attr('data-year'));
