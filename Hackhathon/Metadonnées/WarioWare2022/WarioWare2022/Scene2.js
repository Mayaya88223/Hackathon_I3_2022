var Scene2 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Scene2 ()
    {
        Phaser.Scene.call(this, { key: 'scene2' });
        this.falling;
        this.playing;
        this.text;
        this.winText;
        this.loseText;
        this.coffeeMug;
        this.score;
        this.timerText;
        this.timerGame;
        this.timerShrimp;
        this.scoreText;
        this.mugCursor;
        this.shrimps;
        this.counter;
    },

    preload: function ()
    {
        this.load.spritesheet('bomb', './Assets/bomb.png', { frameWidth: 128, frameHeight: 128 });
        this.load.spritesheet('explosionAnim', './Assets/explosion.png', { frameWidth: 128, frameHeight: 128 });
        this.load.spritesheet('numbers', './Assets/number-buttons-90x90.png', { frameWidth: 90, frameHeight: 90 });
        this.load.image('background', './Assets/bg.png');
        this.load.image('shrimp', './Assets/shrimp.png');
        this.load.image('mug', './Assets/mug.png');
        this.load.audio('explosionSound', './Assets/explosion.wav');
        this.load.audio('splash', './Assets/splash.wav');
    },

    create: function ()
    {
        this.falling = true;
        this.playing = true;
        this.text = false;
        this.score = 0;
        this.counter = 5;
        let backImage = this.add.image(0, 0, 'background');
        backImage.setOrigin(0, 0);
        this.mugCursor = 'url(./assets/mug.png), pointer';
        this.shrimps = this.physics.add.group({ defaultKey: 'shrimp', maxSize: 800 });
        this.timerShrimp = this.time.addEvent({ delay: 500, callback: this.generateShrimp, callbackScope: this, repeat: -1 });
        this.scoreText = this.add.text(600, 32, '', { fontFamily: 'Arial', fontSize: 35, color: '#de4811' });
        this.winText = this.add.text(190, 142, 'You win!', { fontFamily: 'Arial', fontSize: 35, color: '#de4811' });
        this.winText.alpha = 0;
        this.loseText = this.add.text(190, 142, 'You lose!', { fontFamily: 'Arial', fontSize: 35, color: '#de4811' });
        this.loseText.alpha = 0;
        // Affiche la bombe et le chrono
        this.textCounter = this.add.text(20, 100, this.counter, {
            font: "bold 32px Arial",
            fill: "#fff",
            boundsAlignH: "left",
            boundsAlignV: "middle"
        });

        bombAnimation = this.anims.create({
            key: 'bombAnimate',
            frames: this.anims.generateFrameNumbers('bomb'),
            frameRate: 20,
            repeat: -1
        });

        bombAnim = this.add.sprite(100, 120, 'bomb');
        bombAnim.play('bombAnimate');

        this.timerGame = this.time.addEvent({
            delay: 1000,
            callback: this.updateCounter,
            callbackScope: this,
            loop : true
        });

    },

    update: function ()
    {
        this.shrimps.getChildren().forEach(
            function(shrimp){
                if (shrimp.y > 600) shrimp.destroy();
            }, this);
        //YOU WIN
        if(this.score > 50){
            this.winText.alpha = 1;
            this.timerGame.paused = true;
            let timerContinue = this.time.addEvent({
                delay: 2000,
                callback: this.nextLevel,
                callbackScope: this
            });
        }
    },

    nextLevel: function () {
        this.scene.start('scene3');
    },

    generateShrimp: function() {
        let shrimp = this.shrimps.get();
        if (this.falling){
            if(shrimp){
                shrimp.body.setAllowGravity(false);
                shrimp.setPosition(Phaser.Math.Between(50, 750), 0);
                shrimp.setVelocity(0, Phaser.Math.Between(280, 320));
                shrimp.setInteractive({ cursor: 'url(./assets/mug.png), pointer' });
                shrimp.on('pointerover', function(){
                    let splashSound = this.sound.add('splash');
                    splashSound.play();
                    this.score += 10;
                    shrimp.destroy();
                    this.mugCursor = 'url(./assets/mugOn.png), pointer';
                }, this);
            }
        } else shrimp.alpha = 0;
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


