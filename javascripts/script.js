(function() {
  var getEmail, init, root;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  root = document.documentElement;
  root.className = "js";
  getEmail = function() {
    var domain, name, tld;
    name = "ted";
    domain = "tedlee";
    tld = "me";
    return "mailto:" + name + "@" + domain + "." + tld;
  };
  init = function() {
    var link, listItem, mailString;
    window.setTimeout(__bind(function() {
      return root.className = "loaded";
    }, this), 200);
    mailString = getEmail();
    listItem = document.getElementById("email");
    listItem.style.display = "inline-block";
    link = listItem.getElementsByTagName("a")[0];
    return link.setAttribute("href", mailString);
  };
  window.addEventListener("DOMContentLoaded", init, false);
}).call(this);
