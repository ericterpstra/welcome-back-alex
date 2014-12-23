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
        
        text = "Don't stumble into anyone's path, though.";
        var t3 = this.game.add.text(this.game.width/2, this.game.height/2 + 50, text, style);
        t3.anchor.set(0.5);
    }, 
    
    update: function() {
        if(this.game.input.activePointer.justPressed()) {
            this.game.state.start('LevelTwo');
        }
    }
}