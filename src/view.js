 var View = (function(){
  function View(){}
  View.prototype.render = function(postData){
    console.log(postData)
    $("#posts").append("<div class='post'><h4>" +
        postData.title +
      "<h4><div class='post'>" +
        postData.post +
      "</div></div>")
  }

  return View
})()
