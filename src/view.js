 var View = (function(){
  this.view = new View
  function View(){
})

  Controller.prototype.listPosts = function(){
    myDataRef.on('child_added', function(view){
      var Post = snapshot.val()
      view.render(snapshot.val())
    })()
