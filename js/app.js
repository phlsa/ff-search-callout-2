var shortURL = "google.com";
var fullURL = "https://www.google.de/search?q=whimsycal+octopus&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:en-US:unofficial&client=firefox-nightly&channel=sb&gfe_rd=cr&ei=amKhU_veA6uH8QfEjIHQCA";
var urlPattern = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;


Proto.globalize();

var urlBox = select("#url-box");
var searchBox = select("#search-box");
var dropdown = select(".dropdown");
var urlButton = select(".url-button");

urlButton.addEventListener("click", function() {
  if (urlButton.text == 'URL') {
    searchBox.value = fullURL;
    searchBox.setSelectionRange(0, searchBox.value.length);
    after(0, function() { searchBox.scrollLeft = 0 });
    urlButton.text = 'Search Term';
  } else {
    searchBox.value = "whimsycal octopus";
    urlButton.text = 'URL'
  }
  
});

searchBox.addEventListener("focus", function() {
  searchBox.setSelectionRange(0, searchBox.value.length)
});

searchBox.addEventListener("blur", function() {
  dropdown.style.display = "none";
});
searchBox.addEventListener("focus", function() {
  dropdown.style.display = "block";
});

searchBox.addEventListener("keyup", updateUrlBox);

function updateUrlBox() {
  if (searchBox.value == "") {
    urlBox.classList.remove('url');
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
    var regex = new RegExp(urlPattern);
    if (searchBox.value.match(regex) && searchBox.value.indexOf(' ') === -1) {
      urlBox.classList.add('url');
    } else {
      urlBox.classList.remove('url');
    }
  }
}

updateUrlBox();
dropdown.style.display = "none";