WelcomeBack.MainMenu = function(){};

WelcomeBack.MainMenu.prototype = {
    create: function() {
        WelcomeBack.deathCounter = 0;
        //this.background = this.game.add.tileSprite(0,0, this.game.width, this.game.height, 'grass');
        this.background = this.game.add.image(0,0, 'mainbg');
        
        // Title
        var text1 = "Welcome Back Alex";
        var style1 = {font: "50px Arial", fill:"#fff", align: "center"};
        var t = this.game.add.text(this.game.width/2, 30, text1, style1);
        t.setShadow(3,3);
        t.anchor.set(0.5);
        
        // Click to Begin
        var text = "Click to begin";
        var style = {font: "20px Arial", fill:"#fff", align: "center"};
        var t2 = this.game.add.text(10, this.game.height - 30, text, style);
        //t2.anchor.set(0.5);
        
        // Alex
        this.a1 = this.game.add.sprite(-32, this.game.height/2, 'alex', 11);
        this.a1.anchor.set(.5);
        this.a1.animations.add('right', [8,9,8,10], 8, true);
        this.a1.animations.play('right');
        this.game.physics.arcade.enable(this.a1);
        this.game.physics.arcade.moveToXY(this.a1, this.game.width + 100, this.a1.y, 50);
    }, 
    
    update: function() {
        if(this.game.input.activePointer.justPressed()) {
            this.game.state.start('IntroLevelOne');
        }
        
        if(this.a1.x > this.game.width + 64) {
            this.a1.x = -20;    
        }
    }
}