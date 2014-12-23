WelcomeBack.Winner = function(){};

WelcomeBack.Winner.prototype = {
    create: function() {
        this.background = this.game.add.tileSprite(0,0, this.game.width, this.game.height, 'grass');
        
        // Text 1
        var text = "You Win!!\nYou lost " + WelcomeBack.deathCounter + " times.";
        var style = {font: "30px Arial", fill:"#fff", align: "center"};
        var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
        t.anchor.set(0.5);
    }, 
    
    update: function() {
        if(this.game.input.activePointer.justPressed()) {
            this.game.state.start('MainMenu');
        }
    }
}