var Scene3 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Scene3 ()
    {
        Phaser.Scene.call(this, { key: 'scene3' });
        this.octopusSprite;
        this.backGround;
        this.octopusAnimation, this.crabyAnimation, this.cuteStarAnimation; 
        this.shrimpAnimation;
        this.octopusAnim; 
        this.crabyAnim;
        this.cuteStarAnim; 
        this.shrimpAnim;
        this.numberOfFriends;
        this.win;
        this.counter;
        this.winText;
    },

    preload: function ()
    {
        this.load.spritesheet('bomb', './Assets/bomb.png', { frameWidth: 128, frameHeight: 128 });
        this.load.spritesheet('explosionAnim', './Assets/explosion.png', { frameWidth: 128, frameHeight: 128 });
        this.load.spritesheet('numbers', './Assets/number-buttons-90x90.png', { frameWidth: 90, frameHeight: 90 });
        this.load.image('background', './Assets/bg.png');
        this.load.spritesheet('octopusSprite', './Assets/octopus.png', { 
            frameWidth: 24,
            frameHeight: 32
        });
        this.load.spritesheet('crabySprite', './Assets/craby.png', { 
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet('cuteStarSprite', './Assets/cuteStar.png', { 
            frameWidth: 34,
            frameHeight: 32
        });
        this.load.spritesheet('shrimpSprite', './Assets/shrimpAnim.png', { 
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.audio('explosionSound', './Assets/explosion.wav');
        this.load.audio('shrimpSound', './Assets/scene3.mp3');
    },

    create: function ()
    {
        this.octopusAnim = []; 
        this.crabyAnim = [];
        this.cuteStarAnim = []; 
        this.numberOfFriends = Phaser.Math.Between(100, 200);
        this.win = false;
        this.counter=5;
        let backImage = this.add.image(0, 0, 'background');
        backImage.setOrigin(0, 0);
        // ---------------------------- Octopus spawn -----------------------

    for(i = 0; i <= this.numberOfFriends; i++){
        
        this.octopusAnimation = this.anims.create({
            key: 'jumpyOctopus',
            frames: this.anims.generateFrameNumbers('octopusSprite'),
            frameRate: 10,
            repeat: -1
            });
        this.octopusAnim[i]= this.physics.add.sprite(Phaser.Math.Between(40, 760), Phaser.Math.Between(20, 560), 'octopusSprite');
        this.octopusAnim[i].play('jumpyOctopus');
        this.octopusAnim[i].setVelocity(Phaser.Math.Between(-30, 50),Phaser.Math.Between(-30, 50));
        this.octopusAnim[i].body.setAllowGravity(false);
    }

// ---------------------------- Craby spawn ----------------------- 

    for(i = 0; i <= this.numberOfFriends; i++){
        
        this.crabyAnimation = this.anims.create({
            key: 'jumpyCraby',
            frames: this.anims.generateFrameNumbers('crabySprite'),
            frameRate: 10,
            repeat: -1
            });
        this.crabyAnim[i]= this.physics.add.sprite(Phaser.Math.Between(40, 760), Phaser.Math.Between(20, 560), 'crabySprite');
        this.crabyAnim[i].play('jumpyCraby');
        this.crabyAnim[i].setVelocity(Phaser.Math.Between(-30, 50), Phaser.Math.Between(-30, 50))
        this.crabyAnim[i].body.setAllowGravity(false);
    }

// ---------------------------- Star spawn ----------------------- 

    for(i = 0; i <= this.numberOfFriends; i++){
        this.cuteStarAnimation = this.anims.create({
            key: 'jumpyCuteStar',
            frames: this.anims.generateFrameNumbers('cuteStarSprite'),
            frameRate: 10,
            repeat: -1
            });
        this.cuteStarAnim[i]= this.physics.add.sprite(Phaser.Math.Between(40, 760), Phaser.Math.Between(20, 560), 'cuteStarSprite');
        this.cuteStarAnim[i].play('jumpyCuteStar');
        this.cuteStarAnim[i].setVelocity(Phaser.Math.Between(-30, 50),Phaser.Math.Between(-30, 50));
        this.cuteStarAnim[i].body.setAllowGravity(false);
    }

// ---------------------------- Shrimp spawn -----------------------
    this.shrimpAnimation = this.anims.create({
            key: 'jumpyShrimp',
            frames: this.anims.generateFrameNumbers('shrimpSprite'),
            frameRate: 10,
            repeat: -1
            });
    
    
    //shrimpAnim.on('pointerdown', function() {onmouseDown()});
    this.shrimpAnim = this.physics.add.sprite(Phaser.Math.Between(40, 760), Phaser.Math.Between(20, 560), 'shrimpSprite');
    this.shrimpAnim.play('jumpyShrimp');
    this.shrimpAnim.setVelocity(Phaser.Math.Between(-10, 100), Phaser.Math.Between(-10, 100));
    this.shrimpAnim.body.setAllowGravity(false);
    this.shrimpAnim.setInteractive();
    this.shrimpAnim.on('pointerdown', this.destroyShrimp, this);
    this.timedEvent = this.time.delayedCall(5000, false, [], this);
    // Affiche la bombe et le chrono
    this.textCounter = this.add.text(20, 100, this.counter, {
        font: "bold 32px Arial",
        fill: "#fff",
        boundsAlignH: "left",
        boundsAlignV: "middle"
    });

    this.bombAnimation = this.anims.create({
        key: 'bombAnimate',
        frames: this.anims.generateFrameNumbers('bomb'),
        frameRate: 20,
        repeat: -1
    });

    this.bombAnim = this.add.sprite(100, 120, 'bomb');
    this.bombAnim.play('bombAnimate');

    this.timerGame = this.time.addEvent({
        delay: 1000,
        callback: this.updateCounter,
        callbackScope: this,
        loop : true
    });

    this.winText = this.add.text(190, 142, 'You win!', { fontFamily: 'Arial', fontSize: 35, color: '#de4811' });
    this.winText.alpha = 0;
    this.loseText = this.add.text(190, 142, 'You lose!', { fontFamily: 'Arial', fontSize: 35, color: '#de4811' });
    this.loseText.alpha = 0;

    },

    update: function ()
    {
        for(i = 0; i <= this.numberOfFriends; i++){

            // ----- crab Move in screen ---------
    
            if (this.crabyAnim[i].x>810) this.crabyAnim[i].x=-10;
            if (this.crabyAnim[i].x<-10) this.crabyAnim[i].x=810;
            if (this.crabyAnim[i].y>610) this.crabyAnim[i].y=-10;
            if (this.crabyAnim[i].y<-10) this.crabyAnim[i].y=610;
    
            // -------- octopus Move Screen ---------------
    
            if (this.octopusAnim[i].x>810) this.octopusAnim[i].x=-10;
            if (this.octopusAnim[i].x<-10) this.octopusAnim[i].x=810;
            if (this.octopusAnim[i].y>610) this.octopusAnim[i].y=-10;
            if (this.octopusAnim[i].y<-10) this.octopusAnim[i].y=610;
    
            //------------ star Move Screen ----------------
    
            if (this.cuteStarAnim[i].x>810) this.cuteStarAnim[i].x=-10;
            if (this.cuteStarAnim[i].x<-10) this.cuteStarAnim[i].x=810;
            if (this.cuteStarAnim[i].y>610) this.cuteStarAnim[i].y=-10;
            if (this.cuteStarAnim[i].y<-10) this.cuteStarAnim[i].y=610;
    
        // -------------- Shrimp Move Screen -----------------
    
            if (this.shrimpAnim.x>810) this.shrimpAnim.x=-10;
            if (this.shrimpAnim.x<-10) this.shrimpAnim.x=810;
            if (this.shrimpAnim.y>610) this.shrimpAnim.y=-10;
            if (this.shrimpAnim.y<-10) this.shrimpAnim.y=610;
        }
    
    },

    destroyShrimp: function() {
        let shrimpSound = this.sound.add('shrimpSound');
        shrimpSound.play();
        this.win = true;
        this.shrimpAnim.destroy();
        this.winText.alpha = 1;
        this.timerGame.paused = true;
        let timerContinue = this.time.addEvent({
            delay: 2000,
            callback: this.nextLevel,
            callbackScope: this
        });
    },

    nextLevel: function () {
        this.scene.start('scene4');
    },

    updateCounter: function () {
        // Fonction qui décrémente le compteur et vérifie si le joueur a perdu !
        if (!this.win) {
            this.counter--;
            this.textCounter.text = this.counter;
            
            // Si le joueur arrive à 0 seconde :
            if (this.counter == 0) {
                this.add.displayList.removeAll();
                this.backgroundColor = '#ffffff';
                //this.explosionSound.play();
                explosionAnimation = this.anims.create({
                    key: 'explode',
                    frames: this.anims.generateFrameNumbers('explosionAnim'),
                    frameRate: 20,
                    repeat: 0,
                    hideOnComplete: true
                });
                let explosionSound = this.sound.add('explosionSound');
                explosionSound.play();
                let explosionAnim = this.add.sprite(400, 300, 'explosionAnim');
                explosionAnim.setScale(10, 10);
                explosionAnim.play('explode');
                explosionAnim.on('animationcomplete', this.goToMainScene, this);
            }
        }
    },
    goToMainScene:function(){
        this.scene.start('mainscene');
    }
});


