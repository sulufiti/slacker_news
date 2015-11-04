$(function(){
  var controller = new Controller()
  $("#create-post form").submit(function(event){
    controller.createPost(event)
  })
})
