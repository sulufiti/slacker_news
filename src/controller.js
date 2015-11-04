var Controller = (function(){
  var myDataRef

  function Controller(){
    myDataRef = new Firebase('https://slacker-sulu.firebaseIO.com/posts')
  }

  Controller.prototype.createPost = function(event){
    event.preventDefault()
    data = dataFromForm(event.target)
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
