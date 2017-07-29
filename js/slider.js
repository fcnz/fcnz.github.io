function GetSliderValue() {
    $("#SliderElement").on("input change", function() {
        console.log("inside function");
        g_SliderValue = $("#SliderElement").val();
        $("#YearValue").text(g_SliderValue);
    });
};