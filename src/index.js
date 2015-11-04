$(function(){
  var controller = new Controller()
  controller.showPosts()
  $("#create-post form").submit(function(event){
    controller.createPost(event)
  })
})
