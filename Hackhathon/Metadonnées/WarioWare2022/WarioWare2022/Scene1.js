var Scene1 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Scene1 ()
    {
        Phaser.Scene.call(this, { key: 'scene1' });
        this.counter;
        this.win;
        this.textCounter;
        this.text;
        this.winText;
        this.loseText;
        this.score = 0;
        this.timerText;
        this.timerGame;
        this.scoreText;
        this.cursor;
        this.stainImage;
        this.scale;
        this.impactSound;
    },

    preload: function ()
    {
        this.load.spritesheet('bomb', './Assets/bomb.png', { frameWidth: 128, frameHeight: 128 });
        this.load.spritesheet('explosionAnim', './Assets/explosion.png', { frameWidth: 128, frameHeight: 128 });
        this.load.spritesheet('numbers', './Assets/number-buttons-90x90.png', { frameWidth: 90, frameHeight: 90 });
        this.load.image('background', './Assets/bg.png');
        this.load.image('cup', './Assets/cup.png');
        this.load.image('stain', './Assets/stain.png');
        this.load.audio('explosionSound', './Assets/explosion.wav');
        this.load.audio('water', './Assets/water.wav');
        
    },

    create: function ()
    {
        // Initialiser vos variables en dessous de ces deux lignes (si votre jeu dure plus que 3 secondes vous pouvez changer la valeur de counter)
        this.counter = 3;
        this.win = false;

        let backImage = this.add.image(0, 0, 'background');
        backImage.setOrigin(0, 0);
        // Changez le texte d'accroche ici :
        this.text = this.add.text(20, 20, "Clean up the mess", {
            font: "bold 32px Arial",
            fill: "#fff",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        });

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

        // Changez le code ci-dessous pour créer votre environnement de jeu
        //******************************************************************


        this.cursor = 'url(./Assets/sponge.png), pointer';

        this.stainImage = this.add.image(450, 400, 'stain').setInteractive({ cursor: 'url(./Assets/sponge.png), pointer'});
        this.scale = 2;
        this.stainImage.setScale(this.scale);

        this.cupImage = this.add.image(530, 380, 'cup');

        this.winText = this.add.text(190, 142, 'You win!', { fontFamily: 'Arial', fontSize: 35, color: '#de4811' });
        this.winText.alpha = 0;

        this.loseText = this.add.text(190, 142, 'You lose!', { fontFamily: 'Arial', fontSize: 35, color: '#de4811' });
        this.loseText.alpha = 0;

        //******************************************************************
        // Ne pas retirer cette dernière ligne !
        this.timerGame = this.time.addEvent({
            delay: 1000,
            callback: this.updateCounter,
            callbackScope: this,
            loop : true
        });
        //this.time.events.repeat(Phaser.Timer.SECOND, this.counter + 1, this.updateCounter, this);
    },

    update: function () {
        this.stainImage.on('pointerover', this.reduceStain, this);
        if(this.scale <= 0.1){
            this.winText.alpha = 1;
            this.timerGame.paused = true;
            let timerContinue = this.time.addEvent({
                delay: 2000,
                callback: this.nextLevel,
                callbackScope: this
            });
        }
    },

    reduceStain : function () {
        if (this.scale > 0){
                this.scale -= 0.005;
                this.stainImage.setScale(this.scale);
        }
        this.impactSound = this.sound.add('water');
        this.impactSound.play();
        this.impactSound.play();
    },

    nextLevel: function () {
        this.scene.start('scene2');
    },

    render: function () {
        // Normalement rien dans cette fonction !
    },

    updateCounter: function () {
        // Fonction qui décrémente le compteur et vérifie si le joueur a perdu !
        if (!this.win) {
            this.counter--;
            this.textCounter.text = this.counter;
            
            // Si le joueur arrive à 0 seconde :
            if (this.counter == 0) {
                //Scene1.removeAll();
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