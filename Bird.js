class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.dot= loadImage("sprites/smoke.png")
    this.birdpos= [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    

    super.display();
    if(this.body.position.x>200 && this.body.velocity.x>10){
      var capturepos= [this.body.position.x, this.body.position.y]; 
      this.birdpos.push(capturepos);
    }
      for(var count=0; count < this.birdpos.length; count++){
        console.log(count)
        image(this.dot, this.birdpos[count][0], this.birdpos[count][1])
    }
  }

}
