/*
    Name: Brandon Miller
    Class: CPSC 332
    Assignment Name: Homework 6 (JQuery)
    Date: 11/19/22

    HW6 Starter code
    Modified from: https://codepen.io/cathydutton/pen/GBcvo
*/
$(document).ready(function() {
    var $seconds = 00;
    var $tens = 00;
    var $appendTens = $("#tens");
    var $appendSeconds = $("#seconds");
    var $buttonStart = $("#button-start");
    var $buttonStop = $("#button-stop");
    var $buttonReset = $("#button-reset");
    var $interval;

    // styling for the container
    $("div").css({
        backgroundColor: "darkblue",
        border: "5px solid orange",
        textAlign: "center"
    })

    // styling for the header
    $("h1").css({
        color: "orange"
    })

    // adds a class to the paragraph element
    // styles the background of the timer
    $("p").addClass("timer-background");
    $(".timer-background").css({
        backgroundColor: "grey",
        width: "25%",
        height: "35px",
        fontSize: "24px",
        textAlign: "center",
        borderRadius: "15px",
        margin: "auto"
    })

    // adds classes to each button
    // styles each button
    $("#button-start").addClass("start");
    $("#button-stop").addClass("stop");
    $("#button-reset").addClass("reset");
    $(".reset, .start, .stop").css({
        backgroundColor: "black",
        padding: "15px 25px",
        fontSize: "24px",
        color: "orange",
        borderRadius: "15px",
        cursor: "pointer",
        margin: "10px"
    })

    // start button listener
    $($buttonStart).on("click", function() {
        clearInterval($interval);
        $interval = setInterval(startTimer, 10);
        $(".timer-background").css({
            backgroundColor: "green"
        })     
    });

    // stop button listener
    $($buttonStop).on("click", function() {
        clearInterval($interval);
        $(".timer-background").stop(true, true);
        if ($seconds != 0 || $tens != 0)
        {
            $(".timer-background").css({
                backgroundColor: "rgb(251, 18, 47)",
            })
        }  
        $(".timer-background").css("opacity", "1.0");           
    });

    // reset button listener
    $($buttonReset).on("click", function() {
        clearInterval($interval);
        $(".timer-background").stop(true, true);
        $tens = "00";
        $seconds = "00";
        $($appendTens).html($tens);
        $($appendSeconds).html($seconds);
        $(".timer-background").css({
            backgroundColor: "grey",
            opacity: "1.0"
        })              
    });

    // timer function
    // accounts for the timer and fade animation
    function startTimer() {
        $tens++;

        if ($tens < 9) {
            $($appendTens).html("0" + $tens);
        }

        if ($tens > 9) {
            $($appendTens).html($tens);
        }

        if ($tens > 99) {
            console.log("seconds");
            $seconds++;
            $($appendSeconds).html("0" + $seconds);
            $tens = 0;
            $($appendTens).html("0" + 0);
        }

        if ($seconds > 9) {
            $($appendSeconds).html($seconds);
        }  
        $(".timer-background").fadeTo(500, 0.8);
        $(".timer-background").fadeTo(500, 1.0);           
    }        
})