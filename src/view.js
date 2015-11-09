 var View = (function(){
  function View(){}
  View.prototype.render = function(postData){
    $("#posts").append("<div class='post'>"+ postData.title+"</div>")
  }

  return View
})()

