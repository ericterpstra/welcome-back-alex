var WelcomeBack = WelcomeBack || {};

WelcomeBack.LevelThree = function(){};

WelcomeBack.LevelThree.prototype = {
    create: function(){
        
        var self = this;
        this.game.world.setBounds(0,0,480,320);
        
        // CRETE ROAD
        this.road = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'roadtile');
        this.doublestripe = this.game.add.tileSprite(0, this.game.world.height / 2 - 16, this.game.world.width, 32, 'doublestripetile');
        this.stripe1 = this.game.add.tileSprite(0, this.game.world.height / 4 - 24, this.game.world.width, 32, 'roadstripetile');
        this.stripe2 = this.game.add.tileSprite(0, 3 * this.game.world.height / 4 - 8, this.game.world.width, 32, 'roadstripetile');
    
        var roadSpeed = -80;
        this.stripe1.autoScroll(roadSpeed,0);
        this.stripe2.autoScroll(roadSpeed,0);
        
        // CREATE CARS
        this.cars = this.game.add.group();
        this.cars.enableBody = true;
        this.cars.physicsBodyType = Phaser.Physics.ARCADE;
        this.createCars();
        
        // CREATE PLAYER
        this.player = new WelcomeBack.Alex(this.game, false);
        this.player.create(48, this.game.world.centerY - 48);
        this.player.sprite.body.setSize(20,14,6,46);
        this.player.sprite.animations.play('right');
        //this.player.sprite.anchor.set(.75,.5);
        
        // CREATE SOPHIE
        this.dog = this.game.add.sprite(this.player.sprite.x - 16, this.player.sprite.y, 'sophie');
        this.dog.animations.add('walk', [0,1,2,1], 8, true);
        this.dog.animations.play('walk');
        this.game.physics.arcade.enable(this.dog);
        this.dog.body.allowRotation = false;
        this.dog.body.setSize(28,16,0,15);
        
        // CREATE LAMP
        this.lamp = this.game.add.sprite(this.game.world.width + 50, this.game.world.height / 2 - 60, 'streetlamp');
        this.game.physics.arcade.enable(this.lamp);
        this.lamp.scale.set(2);
        this.lamp.body.setSize(4,4,8,this.lamp.height - this.lamp.height/6);
        this.game.physics.arcade.moveToXY(this.lamp, -999, this.lamp.y, (roadSpeed * -1));    

        // CREATE TIMER
        this.levelTime = 60;
        this.textStyle = { font: "24px Arial", fill: "#FFFFFF", align: "center" };
        this.displayTime = this.game.add.text(this.game.world.width - 48, 8, this.levelTime.toString(), this.textStyle);
        
        this.game.time.events.repeat(Phaser.Timer.SECOND, 60, this.levelTimer, this);
    },
    
    update: function(){
        // Move alex & sophie
        this.player.runnerUpdate();
        this.game.physics.arcade.moveToXY(this.dog, 
                                          this.player.sprite.x + 18, 
                                          this.player.sprite.y + 34, 
                                          100, 
                                          500 );
        
        // Check collisions
        this.game.physics.arcade.overlap(this.player.sprite, this.cars, this.deathHandler, null, this);
        this.game.physics.arcade.overlap(this.dog, this.cars, this.deathHandler, null, this);
        this.game.physics.arcade.overlap(this.player.sprite, this.lamp, this.deathHandler, null, this);
        this.game.physics.arcade.overlap(this.dog, this.lamp, this.deathHandler, null, this);
        
        // Reset Cars
        this.cars.forEach(function(car){
            if ( car.x < (car.width * -1) ) {
                car.x = this.game.world.width + Math.random() * 40;
                this.driveCar(car);
            }
        },this);
        
        // Reset Lamp
        if ( this.lamp.x < (this.lamp.width * -1) ) {
            this.lamp.x = this.game.world.width + 10;   
        }
        
        // Win
        if( this.levelTime < 1 ) {
            this.game.state.clearCurrentState();
            this.game.state.start('Winner', true, false);   
        }
    }, 
    
    render: function() {
        //this.game.debug.geom(this.leash);
        //this.game.debug.body(this.dog);
        //this.game.debug.body(this.player.sprite);
        //this.game.debug.body(this.lamp);
        //this.game.debug.body(this.cars);
        //this.game.debug.spriteBounds(this.dog);
    },
    
    createCars: function() {
        var x = this.game.world.width - 100;
        var y;
        
        var Ys = [
            2,
            this.stripe1.y + 24,
            this.doublestripe.y + this.doublestripe.height + 2,
            this.stripe2.y + 8
        ];
        
        for ( var i = 0 ; i < 4 ; i++ ) {
            //y = Ys[(i+1)%4];
            y = Ys[i];
            var aCar = this.cars.create(x,y,'whitecar');
            aCar.body.allowRotation = false;
            aCar.body.setSize(108,48,0,14);
            this.driveCar(aCar);
        }
        
    },
    
    driveCar: function(car) {
        var s = Math.floor(Math.random() * (220 - 100 + 1)) + 100;
        this.game.physics.arcade.moveToXY(car, 0-car.width - 2, car.y, s);       
    },
    
    levelTimer: function() {
        this.levelTime--;
        this.displayTime.setText(this.levelTime);
    },
    
    deathHandler: function() {
        WelcomeBack.deathCounter++;
        this.game.state.clearCurrentState();
        this.game.state.start('LevelThree', true, false);  
    }
}