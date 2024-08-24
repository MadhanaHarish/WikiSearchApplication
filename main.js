const search = (data) => {
    fetch(`https://apis.ccbp.in/wiki-search?search=${data}`, {
        method: "GET",
    }).then(response => response.json()).then( (data)=> {
        document.getElementById("searchResults").innerHTML = "";
        document.getElementById("searchResults").classList.remove("wiki-spinner");
        for(let items of data.search_results){
            let div = document.createElement('div');
            div.classList.add("result-item");
            let title = document.createElement('p');
            let link = document.createElement('a');
            let des = document.createElement('p');
            title.classList.add("result-title", "text-primary");
            link.classList.add("result-url");
            des.classList.add("link-description");
            title.textContent = items.title;
            link.textContent = items.link;
            des.textContent = items.description;
            div.appendChild(title);
            div.appendChild(link);
            div.appendChild(des);
            document.getElementById("searchResults").appendChild(div);
        }
    });
}

document.getElementById('searchInput').addEventListener("keyup", (data) => {
    if(data.key === "Enter"){
        document.getElementById("searchResults").innerHTML = '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>';
        document.getElementById("searchResults").classList.add("wiki-spinner");
        search(document.getElementById('searchInput').value);
    }
});