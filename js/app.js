var shortURL = "google.com";
var fullURL = "https://www.google.de/search?q=whimsycal+octopus&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:en-US:unofficial&client=firefox-nightly&channel=sb&gfe_rd=cr&ei=amKhU_veA6uH8QfEjIHQCA";
var urlPattern = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;


Proto.globalize();

var urlBox = select("#url-box");
var searchBox = select("#search-box");

urlBox.addEventListener("focus", function() {
  searchBox.classList.add("hidden");
  urlBox.value = fullURL;
  urlBox.setSelectionRange(0, urlBox.value.length);
  after(0, function() { urlBox.scrollLeft = 0 });
});

urlBox.addEventListener("blur", function() {
  urlBox.value = shortURL;
  urlBox.setSelectionRange(0,0);
  searchBox.classList.remove("hidden");
});

searchBox.addEventListener("focus", function() {
  searchBox.setSelectionRange(0, searchBox.value.length)
});

searchBox.addEventListener("keyup", function() {
  if (searchBox.value == "") {
    urlBox.style.display = "none";
  } else {
    var regex = new RegExp(urlPattern);
    if (searchBox.value.match(regex) && searchBox.value.indexOf(' ') === -1) {
      urlBox.style.display = "none";
    } else {
      urlBox.style.display = "inline-block";
    }
  }
});