"use strict";


function displayUserResults(results) {
    // Function for showing list of users
    $("#result-user-list").html(results.fname);
}

function showUserResults(evt) {
    // Function to send form info to server as GET
    evt.preventDefault();
        //prevent from working automatically
    var url="/search-users.json?email=" + $("#search-email").val()
            + "&fname=" + $("#search-fname").val() 
            + "&lname=" + $("#search-lname").val();

    $.get(url, displayUserResults);
}

$("#user-search").on('submit', showUserResults);