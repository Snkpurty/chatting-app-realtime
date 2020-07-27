//set client as socket also
// const socket = io.connect('http://localhost:3000');
var socket = io.connect('http://localhost:3000');
//accepting user name
let name = prompt('Enter-your-name');

//getting element from dom
const send = document.getElementById('send');
const text = document.getElementById('inputText');
const chat = document.getElementById('chat');

// chat.innerHTML = "cNWJBCJBwjkefjk";
//emmiting send event
send.addEventListener('click', function(){
  console.log("clicked");
  socket.emit('chat', {message: text.value , name: name  });
  //set value to blank
  text.value = "";
});
//recieving chat event
socket.on('chat',function (data) {
  console.log("client recieved click event");
  //create an div element
  let divElement = document.createElement('div');
  //check the message sent by whom and classlist left or right
  if(data.name === name){
    divElement.classList.add('message','right');
  }
  else {
    divElement.classList.add('message','left');
  }
  divElement.innerHTML = data.name+":  "+data.message;
  //append the child to the parent
  chat.appendChild(divElement);
    // chat.innerHTML += "<div>"+data.name+": "+ data.message +"</div>";
})
