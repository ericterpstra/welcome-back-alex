var WelcomeBack = WelcomeBack || {};

WelcomeBack.LevelOne = function(){};

WelcomeBack.LevelOne.prototype = {
    create: function(){
        var self = this;
        this.isGameOver = false;
        
        // CREATE LEVEL
        this.game.world.setBounds(0, 0, 480, 320);
        this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'grass');
        
        // CREATE PLAYER
        this.player = new WelcomeBack.Alex(this.game, true);
        this.player.create(this.game.world.centerX - 16, this.game.world.centerY - 32);

        // CREATE SCHOOL CHILDREN
        this.children = this.game.add.group();
        this.children.enableBody = true;
        this.children.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.children.create(24, 32 , 'child');
        this.children.create(24, 96, 'child');
        this.children.create(24, 164, 'child');
        this.children.create(24, 248, 'child');
        
        // CREATE ZERGLINGS  
        this.zergz = this.game.add.group();
        this.zergz.enableBody = true;
        this.zergz.physicsBodyType = Phaser.Physics.ARCADE;
        this.zergFramerate = 8;    
        this.createInitialZergs(30);
    
        //START LEVEL
        this.game.time.events.add(Phaser.Timer.SECOND * 2, this.createInitialZergs, this);
        this.currentWave = 0;
        this.sendZergWave(this.currentWave);
    },
    
    update: function(){
        // Do player movement
        this.player.update();
                
        // Check if alex & zerg overlap
        this.game.physics.arcade.overlap(this.player.sprite, this.zergz, this.playerZergPunchHandler, null, this);
        
        // Check to see if zerg & children overlap
        this.game.physics.arcade.overlap(this.zergz, this.children, this.childrenZergOverlap, null, this);
        
        // Check for win
        this.checkWin();
    },
    
    checkWin: function() {
        if(this.currentWave == this.zergWaves.length) {
            if( this.zergz.countLiving() == 0 ) {
                this.game.time.events.add(Phaser.Timer.SECOND * 1, function(){
                    this.game.state.start('IntroLevelTwo', true, false);    
                }, this); 
            }
        }
    },
    
    createInitialZergs: function(numZergs) {  
        var x = this.game.width + 64;
        var y = 0;
        for ( var i = 0 ; i < numZergs ; i++ ) {
            var aZerg = this.zergz.create(x,y,'zerg');
            aZerg.animations.add('top',[0,1,2,1], this.zergFramerate, true);
            aZerg.animations.add('mid',[3,4,5,4], this.zergFramerate, true);
            aZerg.animations.add('bot',[6,7,8,7], this.zergFramerate, true);
            aZerg.animations.add('die',[9,10,11], this.zergFramerate, false).killOnComplete=true;
            aZerg.animations.play('mid');

            aZerg.body.allowRotation = false;
            aZerg.body.setSize(32,32,8,8);
        }
    },
    
    sendZergWave: function() {
        var x,y,zerg;
        for ( var i = 0 ; i < this.zergWaves[this.currentWave].zergs ; i++ ) {
            zerg = this.zergz.next();
            if(!zerg.alive){
                zerg.revive();
                zerg.animations.play('mid');
            }
            zerg.x = this.game.world.width - 8;
            zerg.y = Math.floor(Math.random() * this.game.world.height + 1);
            this.game.physics.arcade.moveToObject(zerg, this.children.getRandom(), 100); 
        }
        
        if ( this.currentWave++ < this.zergWaves.length-1 ) {
            this.game.time.events.add(Phaser.Timer.SECOND * this.zergWaves[this.currentWave-1].seconds, this.sendZergWave, this);
        }
    },
    
    playerZergPunchHandler: function(player, zerg) {
        if( this.player.isPlayerPunching ) {
            zerg.animations.play('die');
        }
    },
    
    childrenZergOverlap: function(zerg, child) {
        if(!this.isGameOver) {
            zerg.animations.play('die');
            child.kill();
            this.isGameOver = true;

            this.game.time.events.add(Phaser.Timer.SECOND * .5, this.deathHandler, this);
        }
    },
    
    deathHandler: function() {
        WelcomeBack.deathCounter++;
        this.game.state.clearCurrentState();
        this.game.state.start('LevelOne', true, false);  
    },
    
    zergWaves : [
        { zergs: 2, seconds: 3},
        { zergs: 3, seconds: 3},
        { zergs: 3, seconds: 3},
        { zergs: 4, seconds: 3},
        { zergs: 4, seconds: 3},
        { zergs: 2, seconds: 2},
        { zergs: 2, seconds: 2},
        { zergs: 4, seconds: 2},
        { zergs: 4, seconds: 2},
        { zergs: 6, seconds: 2},
        { zergs: 6, seconds: 1},
        { zergs: 6, seconds: 1},
        //{ zergs: 8, seconds: 1},
        { zergs: 10, seconds: 1},
    ]
}