"use strict";

$(function() {

    //event handler
    $("#submit-story").click(function(e) {
        var input = $("input").val()
        console.log(input);
        //connecting inputs
        $(".mainName").empty().append($("input.mainName").val());
        $(".number-1").empty().append($("input.number-1").val());
        $(".number-2").empty().append($("input.number-2").val());
        $(".emotion").empty().append($("input.emotion").val());
        $(".relative-1").empty().append($("input.relative-1").val());
        $(".relative-2").empty().append($("input.relative-2").val());
        $(".nouns").empty().append($("input.nouns").val());
        $(".place").empty().append($("input.place").val());
        $(".adj-1").empty().append($("input.adj-1").val());
        $(".adj-2").empty().append($("input.adj-2").val());
        $(".adj-3").empty().append($("input.adj-3").val());
        $(".adj-4").empty().append($("input.adj-4").val());
        $(".clothing").empty().append($("input.clothing").val());
        $(".tv").empty().append($("input.tv").val());
        $(".flower").empty().append($("input.flower").val());
        $(".fish").empty().append($("input.fish").val());
        $(".disaster").empty().append($("input.disaster").val());
        $("p").show();
        $("#elucidate").show();
    });
});

function questionable() {
    window.open("https://www.youtube.com/watch?v=uglxDd1zKvQ", "_blank");
};