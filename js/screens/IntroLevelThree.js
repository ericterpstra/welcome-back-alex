WelcomeBack.IntroLevelThree = function(){};

WelcomeBack.IntroLevelThree.prototype = {
    create: function() {
        //this.background = this.game.add.tileSprite(0,0, this.game.width, this.game.height, 'grass');
        
        // Text 1
        var text = "Level Three: Home Again";
        var style = {font: "30px Arial", fill:"#fff", align: "center"};
        var t1 = this.game.add.text(this.game.width/2, 40, text, style);
        t1.anchor.set(0.5);
        
        //Text2
        style = { font: "15px Arial", fill: "#fff", align: "center" };
        
        text = "Take Sophie for a walk.";
        var t2 = this.game.add.text(this.game.width/2, 90, text, style);
        t2.anchor.set(0.5);
        
        text = "Walk for 60 seconds.\nAvoid cars and lamp posts!";
        var t3 = this.game.add.text(this.game.width/2, this.game.height - 50, text, style);
        t3.anchor.set(0.5);
        
        // GFX
        var a1 = this.game.add.sprite(this.game.width/2 - 40, this.game.height/2, 'alex', 9);
        a1.anchor.set(.5);
        var z = this.game.add.sprite(this.game.width/2 - 90, this.game.height/2, 'sophie');
        //z.anchor.set();
        var c = this.game.add.sprite(this.game.width/2 + 80, this.game.height/2, 'whitecar', 1);
        c.anchor.set(.5);
    }, 
    
    update: function() {
        if(this.game.input.activePointer.justPressed()) {
            this.game.state.start('LevelThree');
        }
    }
}