var WelcomeBack = WelcomeBack || {};

WelcomeBack.LevelTwo = function(){};

WelcomeBack.LevelTwo.prototype = {
    create: function(){
        var self = this;
        this.isGameOver = false;
        
        // Set up level gfx
        this.game.world.setBounds(0,0,1920,320);
        this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'sand');
        this.ocean = this.game.add.tileSprite(0, this.game.world.height - 32, this.game.world.width, 32, 'ocean');
        this.shore = this.game.add.tileSprite(0, this.game.world.height - 48, this.game.world.width, 16, 'shore', 2);
        
        // CREATE PLAYER
        this.player = new WelcomeBack.Alex(this.game, false);
        this.player.create(48, this.game.world.centerY - 32);
        this.game.camera.follow(this.player.sprite);
        this.player.sprite.body.setSize(20,48,6,8);
        
        // CREATE LOBSTERS
        this.createLobsters(12);

        // CREATE BEACHBUMS
        this.xvar = 25;
        this.createBeachbums(25);
        
        // CREATE GIRL
        this.beachgirl = this.game.add.sprite(this.game.world.width - 32, this.game.world.height / 2, 'beachgirl', 1);
        this.game.physics.arcade.enable(this.beachgirl);
        this.beachgirl.allowRotation = false;
        //this.beachgirl = this.game.add.sprite(32, this.game.world.height / 2, 'beachgirl', 1);
        
    },
    
    update: function(){        
        this.player.update();
        
        this.game.physics.arcade.overlap(this.player.sprite, this.beachbums, this.deathHandler, null, this);
        this.game.physics.arcade.overlap(this.player.sprite, this.lobsters, this.deathHandler, null, this);
        this.game.physics.arcade.overlap(this.player.sprite, this.beachgirl, this.winHandler, null, this);
    },
    
    render: function() {
        this.game.debug.spriteBounds(this.player.sprite);    
    },
    
    createBeachbums: function(numBums) {
        this.beachbums = this.game.add.group();
        this.beachbums.enableBody = true;
        this.beachbums.physicsBodyType = Phaser.Physics.ARCADE;
        this.beachbumFramerate = 8;
        
        
        var x,y,xt;
        var startingX = 200;
        var bumOffset = (this.game.world.width - startingX) / numBums;
        
        for ( var i = 0; i < numBums; i++ ) {
            x = startingX + (bumOffset * i);
            y = Math.floor(Math.random() * this.game.world.height + 1);
            s = this.getBumSpeed();
            
            var bum = this.createBum(x,y);

            xt = this.getBumXTarget(x);
            
            this.game.physics.arcade.moveToXY(bum, xt, 0, s);
            bum.animations.play('up');
        }
    }, 
    
    createBum(x,y) {
        var bum = this.beachbums.create(x,y,'beachbum');
        bum.animations.add('down', [0,1,0,2], this.beachbumFramerate, true);
        bum.animations.add('up', [12,13,12,14], this.beachbumFramerate, true);
        bum.checkWorldBounds = true;
        bum.events.onOutOfBounds.add(this.bumOutOfBounds, this);
        return bum;
    },
    
    bumOutOfBounds: function(bum) {
        if(bum.y < 0) {
            this.game.physics.arcade.moveToXY(bum, this.getBumXTarget(bum.x), this.game.world.height, this.getBumSpeed());
            bum.animations.play('down');
        } else {
            this.game.physics.arcade.moveToXY(bum, this.getBumXTarget(bum.x), 0, this.getBumSpeed());
            bum.animations.play('up');
        }
    },
    
    getBumSpeed: function() {
        return Math.floor(Math.random() * (190 - 90 + 1)) + 90;
    },
    
    getBumXTarget: function(x) {
        return Math.floor(Math.random() * ((x+this.xvar) - (x-this.xvar) + 1) + (x-this.xvar));    
    },

        
    createLobsters: function(numBums) {
        this.lobsters = this.game.add.group();
        this.lobsters.enableBody = true;
        this.lobsters.physicsBodyType = Phaser.Physics.ARCADE;
        
        var x,y,xt;
        var startingX = 200;
        var bumOffset = (this.game.world.width - startingX) / numBums;
        
        for ( var i = 0; i < numBums; i++ ) {
            x = startingX + (bumOffset * i);
            y = Math.floor((Math.random() * (this.game.world.height - 50)) + 50);
            
            var bum = this.createLobster(x,y);
            bum.animations.play('jiggle');
        }
    }, 
    
    createLobster(x,y) {
        var lobster = this.lobsters.create(x,y,'lobster');
        lobster.animations.add('jiggle', [0,1], 4, true);
        return lobster;
    },
    
    deathHandler: function() {
        WelcomeBack.deathCounter++;
        this.game.state.clearCurrentState();
        this.game.state.start('LevelTwo', true, false);    
    },
    
    winHandler: function() {
        this.game.state.start('IntroLevelThree', true, false);   
    }
}