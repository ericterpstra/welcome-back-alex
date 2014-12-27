WelcomeBack.Winner = function(){};

WelcomeBack.Winner.prototype = {
    create: function() {
        this.background = this.game.add.tileSprite(0,0, this.game.width, this.game.height, 'grass');
        
        // Text 1
        var text = "You Win!!";
        if( WelcomeBack.deathCounter === 0 ){
            text += "\nFlawless Victory!!\nGood Job!"
        } else {
            text += "\nIt took you " + WelcomeBack.deathCounter + " attempts.\nCan you do better?";
        }
        var style = {font: "30px Arial", fill:"#fff", align: "center"};
        var t = this.game.add.text(this.game.width/2, 10, text, style);
        t.setShadow(3,3);
        t.anchor.set(0.5,0);
        
        // GFX
        var a1 = this.game.add.sprite(this.game.width/2 - 140, this.game.height/2, 'laura', 1);
        a1.anchor.set(.5,0);
        var z = this.game.add.sprite(this.game.width/2 - 90, this.game.height/2, 'eric');
        z.anchor.set(.5,0);
        var c = this.game.add.sprite(this.game.width/2 + 80, this.game.height/2, 'craig', 3);
        c.anchor.set(.5,0);
        var c = this.game.add.sprite(this.game.width/2 + 180, this.game.height/2 - 14, 'karen', 7);
        c.anchor.set(.5,0);
        var c = this.game.add.sprite(this.game.width/2, this.game.height/2 + 32, 'alex', 3);
        c.anchor.set(.5,0);
    }, 
    
    update: function() {
        if(this.game.input.activePointer.justPressed()) {
            this.game.state.start('MainMenu');
        }
    }
}