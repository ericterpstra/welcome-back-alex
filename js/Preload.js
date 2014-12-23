WelcomeBack.Preload = function(){};

WelcomeBack.Preload.prototype = {
    
    preload: function() {
        
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 64, 'preloadbar');
        this.preloadBar.anchor.setTo(0.5);
        
        this.load.setPreloadSprite(this.preloadBar);
        
        this.load.spritesheet( 'alex', 'assets/images/alex.png', 32, 64 );
        
        // Level One
        this.load.image('grass', 'assets/images/grasstile.png');
        this.load.spritesheet( 'zerg', 'assets/images/zergdrone.png', 48, 48 );
        this.load.spritesheet( 'child', 'assets/images/childgirl1.png', 32, 32);
        
        // Level Two
        this.load.image('sand', 'assets/images/sandtile.png');
        this.load.spritesheet( 'shore', 'assets/images/wavetile.png', 16, 16 );
        this.load.spritesheet( 'ocean', 'assets/images/oceantile.png', 16, 16 );
        this.load.spritesheet( 'beachbum', 'assets/images/beachbum.png', 32, 64 );
        this.load.spritesheet( 'lobster', 'assets/images/lobster.png', 32, 32 );
        this.load.spritesheet( 'beachgirl', 'assets/images/beachgirl.png', 32, 48 );
        
        // Level Three
        this.load.image('roadtile', 'assets/images/l3/roadtile.png');
        this.load.image('roadstripetile', 'assets/images/l3/roadstripetile.png');
        this.load.image('doublestripetile', 'assets/images/l3/doublestripetile.png');
        this.load.spritesheet( 'sophie', 'assets/images/l3/sophie.png', 32, 32 );
        this.load.image('whitecar', 'assets/images/l3/whitecar.png');
        this.load.image('streetlamp', 'assets/images/l3/streetlamp.png');
        
        
    },
    
    create: function() {
        this.state.start('MainMenu');    
    }
    
};