WelcomeBack.Alex = function(game, canPunch){
    this.game = game;
    this.isPlayerPunching = false;
    this.cursors = game.input.keyboard.createCursorKeys();
    this.spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);    
    this.canPunch = canPunch;
    if(canPunch) {
        this.spacebar.onDown.add(function(){
            this.isPlayerPunching = true;
        }.bind(this));
    }
};

WelcomeBack.Alex.prototype = {

    create: function(x, y) {
        var self = this;
        
        this.sprite = this.game.add.sprite(x, y, 'alex');
        
        this.playerFrameRate = 8;
        this.sprite.animations.add('down', [0,1,0,2], this.playerFrameRate, true);
        this.sprite.animations.add('left', [4,5,4,6], this.playerFrameRate, true);
        this.sprite.animations.add('right', [8,9,8,10], this.playerFrameRate, true);
        this.sprite.animations.add('up', [12,13,12,14], this.playerFrameRate, true);
        
        this.playerFacing = 'down';
        
        var stopPunching = function(){ self.isPlayerPunching = false };
        this.sprite.animations.add('punchdown', [3,0], this.playerFrameRate, false).onComplete.add(stopPunching);
        this.sprite.animations.add('punchleft', [7,4], this.playerFrameRate, false).onComplete.add(stopPunching);
        this.sprite.animations.add('punchright', [11,8], this.playerFrameRate, false).onComplete.add(stopPunching);
        this.sprite.animations.add('punchup', [15,12], this.playerFrameRate, false).onComplete.add(stopPunching);
        

        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.allowRotation = false;
        if(this.canPunch) {
            this.sprite.body.setSize(32,24,0,12);
        } 
        this.playerSpeed = 180;
        this.playerAngle = 0;
        
        return this.sprite;
    },
    
    update: function(){
        
        this.sprite.body.velocity.y = 0;
        this.sprite.body.velocity.x = 0;

        // SET SPEED
        if(this.cursors.up.isDown) {
            this.sprite.body.velocity.y -= this.playerSpeed;
        }
        else if(this.cursors.down.isDown) {
            this.sprite.body.velocity.y += this.playerSpeed;
        }
        
        if(this.cursors.left.isDown) {
            this.sprite.body.velocity.x -= this.playerSpeed;
        }
        else if(this.cursors.right.isDown) {
            this.sprite.body.velocity.x += this.playerSpeed;
        }

        // SET DIRECTION
        if ( this.sprite.body.facing == Phaser.RIGHT ) {
            this.playerFacing = 'right';
        } else if ( this.sprite.body.facing == Phaser.UP ) {
            this.playerFacing = 'up';
        } else if ( this.sprite.body.facing == Phaser.DOWN ) {
            this.playerFacing = 'down';
        } else if ( this.sprite.body.facing == Phaser.LEFT ) {
            this.playerFacing = 'left';
        }

        // ANIMATE
        if( this.sprite.body.velocity.x == 0 && this.sprite.body.velocity.y == 0 && !this.isPlayerPunching ) {
            this.sprite.animations.stop();   
        } else if (this.isPlayerPunching ) {
            this.sprite.animations.play('punch' + this.playerFacing);
        } else { 
            this.sprite.animations.play(this.playerFacing);
        }
    },
    
    runnerUpdate() {
        this.sprite.body.velocity.y = 0;
        this.sprite.body.velocity.x = 0;

        // SET SPEED
        if(this.cursors.up.isDown) {
            this.sprite.body.velocity.y -= this.playerSpeed;
        }
        else if(this.cursors.down.isDown) {
            this.sprite.body.velocity.y += this.playerSpeed;
        }
        
        if(this.cursors.left.isDown) {
            this.sprite.body.velocity.x -= (this.playerSpeed * 1.5);
        }
        else if(this.cursors.right.isDown) {
            this.sprite.body.velocity.x += (this.playerSpeed / 2);
        }

    }
}