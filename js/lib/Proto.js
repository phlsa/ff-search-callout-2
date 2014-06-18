var Proto = {
  globalize: function() {
    _.extend(window, window.Proto);
  },

  collect: function(selector) {
    var items = document.querySelectorAll(selector);
    var ar = [];
    for (var i=0; i<items.length; i++) {
      ar.push(items[i]);
    }
    return ar;
  },

  select: function(selector) {
    return document.querySelectorAll(selector)[0];
  },

  pluckClass: function(className, item, timeout) {
    if (!timeout) timeout = 0;
    item.classList.add(className);
    setTimeout(function() {
      item.classList.remove(className);
    }, timeout);
  },

  after: function(timeout, fn) {
    return setTimeout(fn, timeout);
  }
}