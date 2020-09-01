//All the variables


var canvas;
var form;
var valuer2;
var bg;
var back1 , back2 , back3 , back4 ;
var feedbackpic;
var explorepic;
var head ;
var logo;
var gb;
var button ;
var question1
var question2
question2;
var button2
var button3
var environment;
var Pollution
var equestion1;
var equestion2;
var explorepic;
var ebutton1
var ebutton2
var homepic
var displayname;
var next;
var command;
var database;
var displayname2;
var sound
var Tesla;
var greeting;
var greeting2;
var greeting3;
var greeting4;
var mail1;
var logout;
var logo;
var text;
var text2,text3,text4;
var displayname ;
var  email;
var password;
var message;
var login , createAccount;
var gameState = "form";
var eQuestion3;
var Question;
var playerCountRef
var name;
var link1
var link2 
var link3
var link4 
var link5
var link6
var loginpage;
var showname;
var Points;
var Question4;
var headtext;
var environmentpic;
var eQuestion4;
var microscope;
var link7;
var morepic;
var morepic2;
function preload(){
    bg = loadImage('mount.jpeg');
  feedbackpic = loadImage(' feedback.jpeg')
  //explorepic = loadImage()
  gb = loadImage('gb.jpg')
  environment = loadImage('unnamed.jpg');
  Pollution = loadImage('Pollution.jpg');
  explorepic = loadImage("Forestbeauty.jpg");
  homepic = loadImage("Fridge.jpg");
 Tesla = loadImage('TeslaModelS.jpg');
 logo =  loadImage('Untitled.png');
 Question = new Question1();
 loginpage = loadImage('Loginpage.jpeg');
environmentpic = loadImage('Environment.jpg');
microscope = loadImage('Manu_Prakash_at_TED.jpg')
morepic = loadImage('Adobe.jpg');
morepic2 = loadImage('Adobe2.jpg');

}
function setup (){
   database = firebase.database();
 
    canvas = createCanvas(displayWidth,displayHeight);
    form  = new Form();
    back1   = new Button('Back',50,825,'back1');  
    back2  = new Button('Back',200,825,'back2');
    back3 = new Button('Back',650,825,'back3');
    head = createElement('h2');
    //button =  createButton('>');
    question1 = createElement('h2');
    question2 = createElement('h2');
    question3 = createElement('h2');
//    button2 = createButton('>');
 //   button3 = createButton('>');
    equestion1 = createElement('h2');
  //  ebutton1 = createButton('>');  
   // next = createButton('Next');
   // displayname = createInput('');
    //command = createElement('h4');
    equestion2 = createElement('h2');
 //   ebutton2 = createButton('>');
    greeting = createElement('h2');
    greeting2 = createElement('h2');
    greeting3  = createElement('h2');
    greeting4 = createElement('h2');
    mail1 = new Mail();
    back4 = createButton("Back");
    logout = createButton('Logout');
    displayname = createInput('');
    email = createInput('Enter your email');
    password = createInput('');
    message = createElement('h4');
    login = createButton("Login");
    createAccount = createButton("CreateAccount");
    text = createElement('h4');
    text2 = createElement('h4');
    text3 = createElement('h4');
    text4 = createElement('h4');
    message.html("Please enter your name");
    eQuestion3 = createElement('h2');
    link1 = createA("Question2.html","Open",'_blank');
    link2 = createA("Question3.html","Open",'_blank');
    link3  = createA("Question1.html","Open",'_blank');
    link4 = createA("eQuestion1.html","Open","_blank");
    link5 = createA("eQuestion2.html","Open","_blank");
    link6 = createA("Question4.html","Open",'_blank');
    Question4 =   createElement('h2');
    showname   = createElement('h3'); 
    Points = createElement('h2');
    headtext = createElement('h2');
    eQuestion4 = createElement('h2');
    link7 = createA("eQuestion4.html","Open","_blank");
  }

function draw (){ 
    
    background("white");
   //text('Go News!',0,0);
   //textSize(24);
   
    image(bg,0,100,displayWidth,925);
    form.display(); 
   
  
if(gameState === "form"){
    background(loginpage)
    headtext.html("If you are already an user you will be logged  in few seconds else kindly make an account");
    headtext.position(200,200);
    headtext.show();
    headtext.style('color','white');
    //rect(545,displayHeight/2-50,220,160);
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
          var userId = firebase.auth().currentUser.uid;
          console.log(userId);
          
          firebase.database().ref('Users/' + userId).once('value').then(function(snapshot){
            if(snapshot.val()){
         //       console.log(snapshot.val());
                var ref = database.ref("Users/");  
                ref.once('value', function(snapshot) {
                  snapshot.forEach(function(childSnapshot) {
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();

                   //console.log(childData);
                   //console.log(email);
                  });
                });     
         
                // playerCountRef =  database.ref(userId + '/firstName').once("value");
             //   console.log(playerCountRef);
              //  console.log(userId.firstname);
                
                gameState = "Home";
               
                
                //window.location.href = "index.html";
         }
            var userRef = database.ref('Users/' + userId).on("value",(data)=>{
                    console.log(data.val().firstName);
                    name = data.val().firstName;
            });

          
          });
        }  else{
             console.log("Kindly create an account");
        }   
    });
     displayname.position(650,370);
    displayname.show();
   
    message.position(650,300);
    message.show();
    email.position(650,425);
    email.show();
    password.position(650,500);
    password.show();
    login.position(750,550);
    createAccount.position(750,600);
    fill("brown");
     rect(625,300,200,250);
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
      //this code is only for testing purpose
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
    
createAccount.mousePressed(()=>{
    if(displayname.value()!==null && password.value()!==null){
        firebase.auth().createUserWithEmailAndPassword(email.value(), password.value())
        .then(function(firebaseUser){
            console.log("user created");
              gameState = "Home";  
              var rootRef = firebase.database().ref().child("Users");
              var userID = firebase.auth().currentUser.uid;
              var usersRef = rootRef.child(userID);
              var userData = {
                "firstName":displayname.value(),
                "email":email.value()
              
                
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
                   gameState = "Home";
                   alert("  Your Account is sucessfully created");
                }
            });
  
             
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
      
 
    }else{
        alert('Kindly fill all the forms');
    }
    
});
    }
    if(gameState === "form"){
        form.hide();
        rect(625,300,200,250);

    }else if(gameState === "Explore"){
        background(explorepic);

    }else{
        
        background(bg);
        headtext.hide();
    }
    
    if(gameState === "Home"){
    //    back1.hide();
      
        login.hide();
        createAccount.hide();
        displayname.hide();
        email.hide();
        password.hide();
        message.hide();
        form.display();
        form.show();
      //  image(logo,0,-20,240,120);
        login.hide();
        createAccount.hide();
        displayname.hide();
        email.hide();
        password.hide();
     
    }
    if(gameState == "didyouknow"){
    back1.display();
    back1.show();

    

    }
    else{
        back1.hide();
    }   
    if(gameState === "back1"){
        
        form.greeting.show();
        form.greeting2.show();
        form.greeting3.show();
        form.didyouknow.show();
        form.feedback.show();
        form.Explore.show();
        form.more.show();
    }
   if(gameState === "Explore"){
       background(explorepic);
            back2.display();
            back2.show();
                 equestion1.html("How technology is helping in our home");
            equestion1.position(500,200);
            equestion1.show();
            equestion2.html("How electric cars are helping the environment");
            equestion2.position(500,400);
            equestion2.show();
            //eQuestion3.html("How this person changed this lake ");
           // eQuestion3.position(500,600)
            eQuestion3.show();
            eQuestion4.html("How they made a $1 microscope");
            eQuestion4.position(500,600);
            eQuestion4.show();

            fill('white');
            link4.position(550,250);
            link4.show();

            link5.position(550,450);
            link5.show();

            link7.position(550,650);
            link7.show();
          //  ebutton1.position(500,250);
           // ebutton1.show();
            //ebutton2.position(500,450);
            //ebutton2.show();
            rect(300,400,800,80);
            rect(300,200,800,80);
            rect(300,600,800,80);
            
            image(homepic,350,200,140,80)
            image(Tesla,350,400,140,80);
            image(microscope,350,600,140,80);
            //ebutton1.mousePressed(()=>{
             //   window.location.href = "eQuestion1.html";
            //})
           // ebutton2.mousePressed(()=>{
            //    window.location.href="eQuestion2.html";
            //})
              
           
   }else{
       back2.hide();
       equestion1.hide();
    //   ebutton1.hide();
       equestion2.hide();
    //   ebutton2.hide();
       eQuestion3.hide();
       eQuestion4.hide();
       link4.hide();
       link5.hide();
       link7.hide();
   }
   if(gameState === "back2"){
       form.greeting.show();
       form.greeting2.show();
       form.greeting3.show();
       form.Explore.show();
       form.feedback.show();
       form.didyouknow.show();
       form.more.show();
     }
   if(gameState === "feedback"){
       back3.display();
       back3.show();
       form.didyouknow.show();
       form.Explore.show();
        form.more.show();
       greeting.html("Dear " + name + " " + "this page is about Feedback of our app  which is still in    ")
       greeting.position(315,0);
       greeting2.html(" development so we would  love if you want to share any feedback with us ")
       greeting2.position(315,50);
       greeting3.html("regarding anything or any particular feature we would also love if you would tell us");
       greeting3.position(315,100);
       greeting4.html(" regarding any bugs in the app we would try to fix your issue  within 24hours ");
       greeting4.position(315,150);  
       greeting.show();
       greeting2.show();
       greeting3.show();
       greeting4.show();
       
       mail1.from.show();
       mail1.myTextArea.show();
       mail1.button.show();
       mail1.sendMail();
       //
    }
   else{
       back3.hide();
       greeting.hide();
       greeting2.hide();
       greeting3.hide();
       greeting4.hide();
       mail1.from.hide();
       mail1.myTextArea.hide();
       mail1.button.hide();
    }
   if(gameState === "back3"){
       //rect(300,300,80,80)
       form.greeting.show();
       form.greeting2.show();
       form.greeting3.show();
       form.feedback.show();
       form.didyouknow.show();
       form.Explore.show();
   }
   if(gameState === "feedback"){
    background(feedbackpic)
    fill("White");
    rect(300,0,800,500);
   
}
   if(gameState === "Explore"){
   // background("white");
   rect(180,100,1050,40);
        head.html("Let's Explore how technology and  the case studies  that are  helping in making the environment clean");
        head.style('color','blue');
        head.position(200,100);
    head.show();
   }else{
       head.hide();
   }
   if(gameState === "didyouknow"){
    // /background("white");
    fill("white") ;   
  
    question1.html("What is Global Warming ? and What are its causes ");
    question1.position(500,200);
    question1.show();
    
    form.Explore.show();
    question2.html("How  to make our environment clean and green");
    question2.position(500,400);
    question2.show();
    fill("orange");
    rect(555,400,80,40);
    link1.position(590,450);
    link1.show();
    question3.html("What is Pollution and What are its  types");
    question3.position(500,600);
    question3.show();
    link2.position(590,650);
    link2.show();
    
    link3.position(590,250);
    link3.show();

    link6.position(590,75);
    link6.show();

    Question4.html('What is environment and why there is a neccessity to clean it ')
    Question4.position(485,25);
    Question4.show();
   
   // button.position(550,250);
    //button.show();

  //  button2.position(550,450);
   // button2.show();
    
  //  button3.position(550,650);
   // button3.show();

   // button.mousePressed(()=>{
      //  window.location.href = "Question1.html";
     // gameState = "Question";
   //  // Question.display();
   //   window.location.href = "Question1.html";
   // })

  //  button2.mousePressed(()=>{
   //   window.location.href = "Question2.html";
   // })
   // button3.mousePressed(()=>{
///      window.location.href = "Question3.html";
  // })
  fill("white");
    rect(300,25,800,80);
    rect(300,200,800,80);  
    rect(300,400,800,80);
    rect(300,600,800,80);
    image(environmentpic,350,25,140,80);
    image(gb,350,200,140,80);
    image(environment,350,400,140,80);
    image(Pollution,350,600,140,80);
   }
   else{
     // button.hide();
     link6.hide();
     Question4.hide();
      question1.hide();
     // button2.hide();
      question2.hide();
   //   button3.hide();
      question3.hide();
      link1.hide();
      link2.hide();
      link3.hide();
      }
     
    if(gameState === "More"){
      background(morepic);
     //  window.location.href= "More.html";
        showname.html(name);
        showname.position(700,350);
        showname.style('color','white')
        showname.show();
        back4.position(800,825);
        back4.show();
        form.feedback.show();
        form.didyouknow.show();
        form.Explore.show();
        logout.position(900,750);
        logout.show();
        fill("black");
        rect(350,200,800,400);
        var pts = 0;
        Points.html("Your Points" +" "+ "=" + " "+  pts);
        Points.position(550,400);
        Points.show();
        Points.style('color','white');
        text.html("App version  - 1.52.84")
        text.position(950,550);
        text.style('color','white');
        text.show();      
        
        logout.mousePressed(()=>{
            window.location.href = "index.html";
        })
        back4.mousePressed(()=>{
            gameState = "back4";
            back4.hide();
            form.more.show();
            form.greeting.show();
            form.greeting2.show();
            form.greeting3.show();
            form.didyouknow.show();
            form.Explore.show();
            form.feedback.show();
        })
    }else{
        back4.hide();
        logout.hide();
        text.hide();
        showname.hide();
        Points.hide();
      }
   if(gameState === "back4"){
       form.Explore.show();
       form.didyouknow.show();
       form.more.show();
      // form.feedback.mousePressed(()=>{
       //   gameState = "feedback";
       //})
   }
   if(gameState === "Question"){
       background("white");
       var canvas2 = createCanvas(800,1700);
       form.hide();
       question1.hide();
       question2.hide();
       question3.hide();
        button.hide();
        button2.hide();
        button3.hide();
   }
   if(gameState !== "Question"){
      

 //      background(bg);
   }
}  