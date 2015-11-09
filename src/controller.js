var Controller = (function(){
  var myDataRef
  var view

  function Controller(){
    view = new View()
    myDataRef = new Firebase('https://slacker-sulu.firebaseIO.com/posts')
  }

  Controller.prototype.createPost = function(event){
    event.preventDefault()
    data = dataFromForm(event.target)
    event.target.reset()
    myDataRef.push(data)
  }

  function dataFromForm(form){
    var data = {}
    $(form).serializeArray().forEach(function(field){
      data[field.name] = field.value
    })
    return data
  }

  Controller.prototype.showPosts = function(){
    myDataRef.on('child_added', function(snapshot){
      var Post = snapshot.val()
      view.render(snapshot.val())
    })

  }
  return Controller
})()
