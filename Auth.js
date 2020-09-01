const auth = firebase.auth();
var message;
var gameState = "form";

  function createAccount (){
    var name = document.getElementById("name");
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    if((email !== null && password !== null) && (email !== "" && password !== "")){
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e => alert(e.message));
      alert('signed up');
      window.location.href = "index2.html";
      if(name !== null){
      var rootRef = firebase.database().ref().child("Users");
      var userID = firebase.auth().currentUser.uid;
      var usersRef = rootRef.child(userID);
      if(name !== null){
      var userData = {
      "Name" : name
      
     };
     usersRef.set(userData, function(error){
      if(error){
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);

        window.alert("Message : " + errorMessage);
      }
      else{
         window.location.href = "index.html";
      }
  });
}

    }
    
    }
    else{
       alert('Please fill out all fields');
    }
}
function Login(){

var name;
var email;
var password
name = document.getElementById('name');
email = document.getElementById('email');
password = document.getElementById('password');
    if((email !== null && password !== null) && (email !== "" && password !== "")){
        var result = firebase.auth().signInWithEmailAndPassword(email, password);
       // window.alert("result" + result);
        result.catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message : " + errorMessage);
        });
}
} 
$("#btn-update").click(function(){
  var phone = $("#phone").val();
  var address = $("#address").val();
  var fName = $("#firstName").val();
  var sName = $("#secondName").val();
  var gender = $("#gender").val();

  var rootRef = firebase.database().ref().child("Users");
  var userID = firebase.auth().currentUser.uid;
  var usersRef = rootRef.child(userID);

  if(phone !== null && address !== null && fName !== null && gender !== null && sName !== null){
        var userData = {
           "phone":phone,
           "address":address,
           "gender":gender,
           "firstName":fName,
           "secondName":sName
        };

        usersRef.set(userData, function(error){
            if(error){
              var errorCode = error.code;
              var errorMessage = error.message;
    
              console.log(errorCode);
              console.log(errorMessage);
    
              window.alert("Message : " + errorMessage);
            }
            else{
               window.location.href = "index.html";
            }
        });

  }
  else{
      window.alert("Please fill out all fields.")
  }
});    
function Logout (){
 // next.hide();
  auth.signOut();
  alert('signout');
}
auth.onAuthStateChanged(function(user){
  if(user){
    var email = user.email;
    
   alert(" Activeuser" + email);

  }else{
   alert('No Active User')
  }
})
function working(){
  if(email!=null){
      console.log("working");
  }
}
function create(){
  window.location.href = "createAccount.html";
}
