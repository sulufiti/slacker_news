 var View = (function(){
  function View(){}
  View.prototype.render = function(postData){
    $("#posts").append("<div class='post'><h4>"+
        postData.title+
      "<h4><div class='post'>"+
        postData.post+
      "</div></div>")
  }
  return View

  function delete_post
})()


// var template = $('#handlebar-posts').html()
//  var templateScript = Handlebars.compile(template)
//  var context = {}
