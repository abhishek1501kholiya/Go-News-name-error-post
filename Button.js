class Button {
    constructor(name,buttonx,buttony,gamestate){
    this.button = createButton(name)
    this.buttonnX = buttonx;
    this.buttonY = buttony;  
    this.gamestate = gamestate;
  

}
 hide(){
    this.button.hide();
 }
 display(){
    this.button.position(this.buttonnX,this.buttonY);
    this.button.mousePressed(()=>{
        gameState = this.gamestate;
    })
 }
  show(){
      this.button.show();
  }
}