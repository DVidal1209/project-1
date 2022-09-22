var btnSearch = $("#searchBtn");
btnSearch.on("click", function(e){
    e.preventDefault();
    var search = document.getElementById("search");
    var results = document.getElementById("searchResults");
    // Youtube API call
    fetch('https://youtube.googleapis.com/youtube/v3/search?q='+ search.value + '&type=video&key=AIzaSyAgdR40xM9JWdT6pNZ88la8l8UpH9cAc3Y')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.items.length, data);
        for (var i=0; i<data.items.length; i++){
            var item = document.createElement("iframe");
            console.log("https://www.youtube.com/watch?v=" +data.items[i].id.videoId);


        }
    })
    // Giphy API call
    fetch("https://api.giphy.com/v1/gifs/search?api_key=bwocb4KLlWPjMVn0GRDP3Dnzb0jsGyhW&q=" + search.value + "&limit=20&offset=0&rating=g&lang=en")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        for (i=0; i<data.data.length; i++){
            console.log(data.data[i].embed_url);
        }
    })
})