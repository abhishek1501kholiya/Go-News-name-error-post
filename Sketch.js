var canvas;
var bg;
var displayname ;
var  email;
var password;
var message;
var login , createAccount;
var gameState = "form";
function preload(){
    bg = loadImage("image.jpg");
}
function setup(){
 canvas = createCanvas(500,700);
 displayname = createInput('');
 email = createInput('Enter your email');
 password = createInput('');
 message = createElement('h4');
 login = createButton("Login");
 createAccount = createButton("CreateAccount");
}
function draw(){
background(bg);
fill("brown");
if(gameState === "form"){
//rect(545,displayHeight/2-50,220,160);

displayname.position(200,200);
displayname.show();
message.html("Please enter your name");
message.position(200,300);
message.show();
email.position(200,400);
email.show();
password.position(200,500);
password.show();
login.position(200,600);
createAccount.position(200,650);
login.mousePressed(()=>{
    alert("testing");

    firebase.auth().signInWithEmailAndPassword(email.value(), password.value())
   .then(function(firebaseUser) {
      var userId = firebase.auth().currentUser.uid;
      console.log(userId);
      firebase.database().ref('Users/' + userId).once('value').then(function(snapshot){
        if(snapshot.val()){
            console.log(snapshot.val().firstName);
            gameState = "Home";
        }

      })
     // window.location.href = "index2.html";
      console.log(firebaseUser);
   })
  .catch(function(error) {
      alert(error.message)
  });
   /* firebase.auth().onAuthStateChanged(function(user){
        if(user){
          var userId = firebase.auth().currentUser.uid;
          console.log(user);
          
          firebase.database().ref('Users/' + userId).once('value').then(function(snapshot){
            if(snapshot.val()){
                console.log(snapshot.val());
                if(user.email === "wantedchorpolice@gmail.com"){
                  window.location.href = "index2.html";
                }
                else
                {              
                  window.location.href = "index2.html";
                }
                //window.location.href = "index.html";
            }
            else{
                window.location.href = "index.html";
            }   
          });
        }
    });*/
})

}
createAccount.mousePressed(()=>{
    if(displayname.value()!==null && password.value()!==null){
        firebase.auth().createUserWithEmailAndPassword(email.value(), password.value())
        .then(function(firebaseUser){
            console.log("user created");
        })
        .catch(function(error) {
            alert(error.message)
        });
        /*result.catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
        
            console.log(errorCode);
            console.log(errorMessage);
    
            window.alert("Message : " + errorMessage);
        });*/
        gameState = "Home";  
 
    }else{
        alert('Kindly fill all the forms');
    }
    
});
}