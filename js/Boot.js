var WelcomeBack = WelcomeBack || {};

WelcomeBack.Boot = function(){};

WelcomeBack.Boot.prototype = {
    preload: function() {
        this.load.image('preloadbar', 'assets/images/preloader-bar.png');
    }, 
    
    create: function() {
        this.game.stage.backgroundColor = '#000';
        
        this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
        this.scale.width = 480;
        this.scale.height = 320;
        
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
        this.state.start('Preload');
    }
}