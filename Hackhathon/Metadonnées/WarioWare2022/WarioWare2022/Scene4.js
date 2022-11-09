var Scene4 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Scene4 ()
    {
        Phaser.Scene.call(this, { key: 'scene4' });
        this.counter;
        this.win;
        this.textCounter;
        this.text;
        this.winText;
        this.loseText;
        this.player;
        this.coffee;
        this.platforms;
        this.cursors;
        this.score;
        this.gameOver = false;
        this.scoreText;
        this.timerText;
        this.timer;

    },

    preload: function ()
    {
        this.load.spritesheet('bomb', './Assets/bomb.png', { frameWidth: 128, frameHeight: 128 });
        this.load.spritesheet('explosionAnim', './Assets/explosion.png', { frameWidth: 128, frameHeight: 128 });
        this.load.spritesheet('numbers', './Assets/number-buttons-90x90.png', { frameWidth: 90, frameHeight: 90 });
        this.load.image('background', './Assets/bg.png');
        this.load.image('ground', './Assets/platform.png');
        this.load.image('coffee', './Assets/coffee.png');
        this.load.image('shrimpy', './Assets/Shrimpy.png');
        this.load.audio('explosionSound', './Assets/explosion.wav');
        this.load.audio('jump', './Assets/Jump.mp3');
    },

    create: function ()
    {
        // Initialiser vos variables en dessous de ces deux lignes (si votre jeu dure plus que 3 secondes vous pouvez changer la valeur de counter)
        this.counter = 10;
        this.win = false;
        this.score = 0;

        let backImage = this.add.image(0, 0, 'background');
        backImage.setOrigin(0, 0);
        // Changez le texte d'accroche ici :
        this.text = this.add.text(20, 20, "Drink coffee", {
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

        this.winText = this.add.text(190, 142, 'You win!', { fontFamily: 'Arial', fontSize: 35, color: '#de4811' });
        this.winText.alpha = 0;

        this.loseText = this.add.text(190, 142, 'You lose!', { fontFamily: 'Arial', fontSize: 35, color: '#de4811' });
        this.loseText.alpha = 0;

        // Changez le code ci-dessous pour créer votre environnement de jeu
        //******************************************************************
        // Le groupe des plateformes contient le sol et les 2 rebords sur lesquels nous pouvons sauter.
    this.platforms = this.physics.add.staticGroup();
    // Nous créons ici le sol.
    // Mettez-le à l'échelle pour qu'il s'adapte à la largeur du jeu (le sprite original a une taille de 400x32).
    //scale et le refresh va agrandir ma platforme
    //Permettre à ma platform d'être considérée comme un collider.
    this.platforms.create(400, 584, 'ground').setScale(2).refreshBody();

    this.platforms.create(600, 280, 'ground');
    this.platforms.create(50, 400, 'ground');
    this.platforms.create(750, 150, 'ground');

    //Ajout de physique à mon player
    this.player = this.physics.add.sprite(100, 450, 'shrimpy');

    //Setbounce va faire rebondire ma crevette
    this.player.setBounce(0.3);
    //Quand ma crevette va être en collision avec un autre element 
    //Elle va rembondire 
    this.player.setCollideWorldBounds(true);

    // Événements de saisie
    this.cursors = this.input.keyboard.createCursorKeys();
    // Quelques café à collecter, 10 au total, régulièrement espacées de 70 pixels le long de l'axe x.
    this.coffee = this.physics.add.group({
        key: 'coffee',
        repeat: 10,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    //Quand mes coffees arrivent, un bouce est rajouté avec un float entre 0.4-0.8
    this.coffee.children.iterate(function (child) {
        //On donne un rebond différent aux cafés
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.6));
    });

    this.scoreText = this.add.text(16, 562, 'Score: 0', { fontSize: '32px', fill: '#FFFFFF' });
    
    //Création de mon timer 
    this.timerText = this.add.text(600, 562, '', { fontSize: '32px', fill: '#FFFFFF' });
    this.timer = this.time.addEvent({
        delay:10000,
        callback: this.TimesOut,
        callbackScope: this
    });

    //Ajout des collider pour la crevette et les platforms et les cafés avec les platforms
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.coffee, this.platforms);
    // Vérifie si le joueur chevauche l'un des cafés, si c'est le cas, appelle la fonction collectCoffee.
    this.physics.add.overlap(this.player, this.coffee, this.collectCoffee, null, this);


        
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
        if (this.gameOver) {
            return;
        }
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
        }
        else {
            this.player.setVelocityX(0);
        }
    
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            let jumpSound = this.sound.add('jump');
            jumpSound.play();
            this.player.setVelocityY(-330);
        }
    
        this.timeLeft = 10 - this.timer.getElapsedSeconds();
        //substr pour avoir x chiffre après la virgule
        this.timerText.setText('Timer: '+this.timeLeft.toString().substr(0, 3));
    },

    collectCoffee: function (coffee,player) {
        player.disableBody(true, true);
        //  Add and update the score
        this.score += 5;
        this.scoreText.setText('Score: ' + this.score);
        if(this.score>30){
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
        this.scene.start('scene5');
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