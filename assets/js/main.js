$(document).ready(function() {
    var item, title, author, publisher, bookLink, bookImg;
    var outputList = document.getElementById("list-output");
    var bookUrl = "https://www.googleapis.com/books/v1/volumes?q="
    var placeHolder = '<img src="https://via.placeholder.com/150">'
    var searchData; 
})

//listener for Search button
$("#search").click(function() {
    outputList.innerHTML = ""
    searchData = $("#search-box").val();
    //handling empty search input field
    if(searchData === "" || searchData === null) {
        displayError();
    }
    else {
        $.ajax({
            url: bookUrl + searchData
            dataType: "json",
            success: function(res) {
                console.log(res)
                if(response.totalItem === 0) {
                    alert("No results! Try again.")
                }

                else {
                    $("title").anitem({"margin-top: 10px"});
                    $(".book-list").css("visibility: visible");
                    //displayResult(res);
                }

            }
            error: function() {
                alert("Something went wrong!...");
            }
        })
    }
    $("#search-box").val("");
})