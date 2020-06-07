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
                    $("title").anitem({"margin-top:" "5px"}, 1000);
                    $(".book-list").css("visibility:", "visible");
                    displayResults(response);
                }

            }
            error: function() {
                alert("Something went wrong!...<br>"+"Try again!");
            }
        });
    }
    $("#search-box").val("");
});

/*
function to display results in index.html
@param res
*/
function displayResults(res) {
    for(var i = 0; i < res.items.length; i+=2) {
        item = res.items[i];
        title;
    }
}