class Question1 {
    constructor(){
        this.img = loadImage('TeslaModelS.jpg');
        this.img2 = loadImage('gb.jpg');
        this.header = createElement('h1');
        this.header2 = createElement('h1');
        this.header3 = createElement('h1');
        this.header4 = createElement('h1');
        this.header5 = createElement('h1');
        this.header6 = createElement('h1');
        this.header7 = createElement('h1');
        this.header8 = createElement('h1');
        this.body = createElement('h2'); 
        this.body2 = createElement('h2');
        this.body3 = createElement('h2');
        this.body4 = createElement('h2');
        this.body5 = createElement('h2');
        this.body6 = createElement('h2');
        this.body7 = createElement('h2');
        this.body8 = createElement('h2');
        this.body9 = createElement('h2');
        this.body10 = createElement('h2');
        this.body11 = createElement('h2');
        this.body12 = createElement('h2');
        this.body13 = createElement('h2');
    }
    hide(){
        this.img.hide();
        this.img2.hide();
        this.header.hide();
        this.header2.hide();
        this.header3.hide();
        this.header4.hide();
        this.header5.hide();
        this.header6.hide();
        this.header7.hide();
        this.header8.hide();
        this.body.hide();
        this.body2.hide();
        this.body3.hide();
        this.body4.hide();
        this.body5.hide();
        this.body6.hide();
        this.body7.hide();
        this.body8.hide();
        this.body9.hide();
        this.body10.hide();
        this.body11.hide();
        this.body12.hide();
    }
    show(){
        this.img.show();
        this.img2.show();
        this.header.show();
        this.header2.show();
        this.header3.show();
        this.header4.show();
        this.header5.show();
        this.header6.hide();
        this.header7.hide();
        this.header8.hide();
        this.body.show();
        this.body2.show();
        this.body3.show();
        this.body4.show();
        this.body5.show();
        this.body6.show();
        this.body7.show();
        this.body8.show();
        this.body9.show();
        this.body10.show();
        this.body11.show();
        this.body12.show();
    }
    display(){
  //     image(this.img);
  //  image(this.img2);
     this.header.html("What is Global warming ?");
     this.body.html(">Global warming is an aspect of climate change, referring to the long-term rise of the planet's temperatures. It is caused by increased concentrations of greenhouse gases in the atmosphere, mainly from human activities such as burning fossil fuels, deforestation and farming.");
     this.header2.html("What are its causes");
     this.header3.html("The causes of Global warming are - ");
     this.header4.html("1. Burning fossil fuels");
     this.body2.html("When we burn fossil fuels like coal, oil and gas to create electricity or power our cars, we release CO2 pollution into the atmosphere.")
     this.body3.html(" It is also been found that 32% of all emissions comes from electricity while 28% of carbon pollution is caused due to Transportation and 20% is caused by Industry and the remaining is caused by Agricultural and Commercial and Residental")
  //     image(this.img);
     this.header5.html("2. Another Main cause is Deforestation");
     this.body4.html("As we know that trees help us alot but we Humans cut trees just for the purpose of  industrialization")
     this.body5.html("and building residences but we should also not forget that trees provide us Oxygen (the air we breathe) give us food , timber also they protect us form soil erosion , flood and global Warming . Cutting down of trees is  an another cause behind Global Warming as they absorb Carbon Dioxide (co2) so that the carbin dixoide wouldnot be too much and can not be able to increase the earth's temperature but if we cut trees then who would absorb Carbon Dioxide that's why we should stop Deforestation ");
     this.header6.html(">Solution to this")
     this.header7.html("1> We should plant more and more Trees");
     this.header8.html("2> We should also follow Afforestation");

     this.header.position(150,100);
     this.header2.position(150,200);
     this.header3.position(150,300);
     this.header4.position(150,400);
     this.header5.position(150,500);
     this.header6.position(150,600);
     this.header7.position(150,700);
     this.header8.position();
     this.body.position();
     this.body2.position();
     this.body3.position();
     this.body4.position();
     this.body5.position();
     this.body6.position();
     this.body7.position();
     this.body8.position();
     this.body9.position();
     this.body10.position();
     this.body12.position();
    }
}