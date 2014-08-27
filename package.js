Package.describe({
  "summary": "JavaScript library for creating an Apple-like one page scroller website."
});

Package.on_use(function (api) {

  api.use("jquery", "client");

  api.add_files("jquery.onepage-scroll.js", "client");
  api.add_files("onepage-scroll.css", "client");

});