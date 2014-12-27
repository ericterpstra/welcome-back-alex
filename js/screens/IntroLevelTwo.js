WelcomeBack.IntroLevelTwo = function(){};

WelcomeBack.IntroLevelTwo.prototype = {
    create: function() {
        //this.background = this.game.add.tileSprite(0,0, this.game.width, this.game.height, 'grass');
        
        // Text 1
        var text = "Level Two: Beach Party!";
        var style = {font: "30px Arial", fill:"#fff", align: "center"};
        var t1 = this.game.add.text(this.game.width/2, 40, text, style);
        t1.anchor.set(0.5);
        
        //Text2
        style = { font: "15px Arial", fill: "#fff", align: "center" };
        
        text = "Cross the beach and meet the woman of your dreams!";
        var t2 = this.game.add.text(this.game.width/2, 90, text, style);
        t2.anchor.set(0.5);
        
        text = "Don't stumble into anyone's path, though.\nAnd watch out for crabs!";
        var t3 = this.game.add.text(this.game.width/2, this.game.height - 40, text, style);
        t3.anchor.set(0.5);
        
        // Title GFX
        var a1 = this.game.add.sprite(this.game.width/2 - 80, this.game.height/2, 'alex', 9);
        a1.anchor.set(.5);
        var z = this.game.add.sprite(this.game.width/2, this.game.height/2, 'lobster');
        z.anchor.set(.5);
        var c = this.game.add.sprite(this.game.width/2 + 80, this.game.height/2, 'beachgirl', 1);
        c.anchor.set(.5);
        
    }, 
    
    update: function() {
        if(this.game.input.activePointer.justPressed()) {
            this.game.state.start('LevelTwo');
        }
    }
}