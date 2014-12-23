WelcomeBack.IntroLevelOne = function(){};

WelcomeBack.IntroLevelOne.prototype = {
    create: function() {
        //this.background = this.game.add.tileSprite(0,0, this.game.width, this.game.height, 'grass');
        
        // Text 1
        var text = "Level One: Save The Children!";
        var style = {font: "30px Arial", fill:"#fff", align: "center"};
        var t1 = this.game.add.text(this.game.width/2, 40, text, style);
        t1.anchor.set(0.5);
        
        //Text2
        style = { font: "15px Arial", fill: "#fff", align: "center" };
        
        text = "The Zerg have invaded your school! You must save the students!";
        var t2 = this.game.add.text(this.game.width/2, 90, text, style);
        t2.anchor.set(0.5);
        
        text = "Punch the Zerg before they reach the schoolchildren.\nUse Arrow Keys to Move. Space Bar to Punch.";
        var t3 = this.game.add.text(this.game.width/2, this.game.height/2 + 50, text, style);
        t3.anchor.set(0.5);
        
    }, 
    
    update: function() {
        if(this.game.input.activePointer.justPressed()) {
            this.game.state.start('LevelOne');
        }
    }
}