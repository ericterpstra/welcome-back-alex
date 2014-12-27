WelcomeBack.IntroLevelOne = function(){};

WelcomeBack.IntroLevelOne.prototype = {
    create: function() {
        //this.background = this.game.add.tileSprite(0,0, this.game.width, this.game.height, 'grass');
        
        // Title Text
        var text = "Level One: Save The Children!";
        var style = {font: "30px Arial", fill:"#fff", align: "center"};
        var t1 = this.game.add.text(this.game.width/2, 40, text, style);
        t1.anchor.set(0.5);
        
        // Subetxt
        style = { font: "15px Arial", fill: "#fff", align: "center" };
        
        text = "The Zerg have invaded your school! You must save the students!";
        var t2 = this.game.add.text(this.game.width/2, 70, text, style);
        t2.anchor.set(0.5);
        
        
        // Title GFX
        var a1 = this.game.add.sprite(this.game.width/2, this.game.height/2, 'alex', 11);
        a1.anchor.set(.5);
        var z = this.game.add.sprite(this.game.width/2 + 60, this.game.height/2, 'zerg', 1);
        z.anchor.set(.9);
        var c = this.game.add.sprite(this.game.width/2 - 80, this.game.height/2, 'child');
        
        
        // Bottom Text
        text = "Punch the Zerg before they reach the schoolchildren.\nUse Arrow Keys to Move. Space Bar to Punch.";
        var t3 = this.game.add.text(this.game.width/2, this.game.height - 45, text, style);
        t3.anchor.set(0.5);
        
    }, 
    
    update: function() {
        if(this.game.input.activePointer.justPressed()) {
            this.game.state.start('LevelOne');
        }
    }
}