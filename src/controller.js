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

    Controller.prototype.showPost = function(event){
      myDataref.on('child-added'), function(snapshot){
        var Post = snapshot.val()
        console.log(snapshot)
      }

    }
    return data
  }
    return Controller
})()
