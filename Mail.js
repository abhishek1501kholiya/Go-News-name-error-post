class Mail{
  
    //creates the inputs
    constructor(){
        this.from = createInput('Enter your email Address');
        this.myTextArea = createElement('textarea');
        this.myTextArea.attribute("rows","10");
        this.myTextArea.attribute("cols","101");
        this.to = "abhishekkholiya15012007@gmail.com";
        this.button = createButton("Send Email");
    }
    hide(){
        this.from.hide();
        this.myTextArea.hide();
        this.button.hide();
    }
    show(){
        this.from.show();
        this.myTextArea.show();
        this.button.show();
    }

    //creates the fuction and sets the position of the inputs
    sendMail(){
       this.from.position(windowWidth/4,windowHeight/2-75);
       this.myTextArea.position(windowWidth/4,windowHeight/2-50);
       this.button.position(windowWidth/4,windowHeight/2+100);
       this.from.style('width','500px');
    //   this.from.style('height','50px');
       this.button.style('width','150px');
      // this.button.style('height','50px');

          //creates the function on pressing the mouse
        
       this.button.mousePressed(()=>{
           if(this.from.value() !== null && this.from.value() !== ""){
          Email.send({
            SecureToken : "8f3f3aff-06d2-493b-aa98-1d135b73a48b",
            To : this.to,
            From : this.from.value(),
            Subject : "Found Someone",
            Body :this.myTextArea.value()
          })
          .then(
            message => alert('Email is sent successfully')
          ); 
           }else{
               alert('kindly enter an email address or right email address');
           }
       });
    }
}