class Button{
    constructor(){
     this.login = createButton('Login');
      this.createAccount = createButton('CreateAccount');
    }
    hide(){
        this.login.hide();
        this.createAccount.hide();
    }
    show(){
        this.login.show();
        this.createAccount.show();
    }
    display(){
        this.login.position(400,700);
        this.createAccount.position(400,800);
        this.login.mousePressed(()=>{
           
                
                
            firebase.auth().signInWithEmailAndPassword(email.value(), password.value())
            .then(function(firebaseUser) {
               window.location.href = "index2.html";
               console.log(firebaseUser);
            })
           .catch(function(error) {
               alert(error.message)
           });
        })
        this.createAccount.mousePressed(()=>{
           
        });
    }
}