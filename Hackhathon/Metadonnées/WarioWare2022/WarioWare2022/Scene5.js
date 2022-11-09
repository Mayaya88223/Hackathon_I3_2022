var Scene5 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Scene5 ()
    {
        Phaser.Scene.call(this, { key: 'scene5' });
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
        this.timerGame;
        this.timer;
        this.sprite;
        this.group;
        this.cursorPosition;
    },

    preload: function ()
    {
        this.load.spritesheet('bomb', './Assets/bomb.png', { frameWidth: 128, frameHeight: 128 });
        this.load.spritesheet('explosionAnim', './Assets/explosion.png', { frameWidth: 128, frameHeight: 128 });
        this.load.spritesheet('numbers', './Assets/number-buttons-90x90.png', { frameWidth: 90, frameHeight: 90 });
        this.load.image('background', './Assets/bg.png');
        this.load.image('myshrimp', './Assets/shrimp4.png');
        this.load.image('star', './Assets/cuteStar1.png');
        this.load.image('tiles', './Assets/coral.png');
        this.load.tilemapTiledJSON('walls', './Assets/Tiled/last_try.json');
        this.load.audio('explosionSound', './Assets/explosion.wav');
        this.load.audio('swim', './Assets/scene5.wav');
    },

    create: function ()
    {
        // Initialiser vos variables en dessous de ces deux lignes (si votre jeu dure plus que 3 secondes vous pouvez changer la valeur de counter)
        this.counter = 7;
        this.win = false;
        this.score = 0;

        let backImage = this.add.image(0, 0, 'background');
        backImage.setOrigin(0, 0);
        // Changez le texte d'accroche ici :
        this.text = this.add.text(20, 10, "Catch the star", {
            font: "bold 32px Arial",
            fill: "#fff",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        });

        // Affiche la bombe et le chrono
        this.textCounter = this.add.text(30, 100, this.counter, {
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

        bombAnim = this.add.sprite(110, 120, 'bomb');
        bombAnim.play('bombAnimate');

        this.winText = this.add.text(190, 282, 'You win!', { fontFamily: 'Arial', fontSize: 35, color: '#de4811' });
        this.winText.alpha = 0;

        this.loseText = this.add.text(190, 282, 'You lose!', { fontFamily: 'Arial', fontSize: 35, color: '#de4811' });
        this.loseText.alpha = 0;

        // Changez le code ci-dessous pour créer votre environnement de jeu
        
   // -------- Tilemap setup --------
   
   const map = this.make.tilemap({ key: 'walls' });   
   var corals = map.addTilesetImage('Corals', 'tiles', 32, 32, 0, 0);   
   let wallsLayer = map.createStaticLayer(0, corals, 0, 50);
   wallsLayer.setCollisionBetween(0, 1);
   //wallsLayer.setCollisionByProperty({ collides: true }); // !!! COLLISION NOT DETECTED
   //walls.setCollisionBetween(1, 1000);

   // -------- Shrimp and Goal setup --------
   
   shrimp = this.physics.add.image(115, 200, 'myshrimp');
   shrimp.body.setAllowGravity(false);
   goal = this.physics.add.image(675, 460,'star');
   goal.body.setAllowGravity(false);
   goal.setImmovable(true);

   // -------- Colliders setup ---------

   this.physics.add.collider(shrimp, wallsLayer, this.CollisionWall, null, this);
   this.physics.add.collider(shrimp, goal, this.CollisionStar, null, this);
   
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
        if (this.input.mousePointer.isDown){
            this.physics.moveTo(shrimp, this.input.x, this.input.y,500);
            let swimSound = this.sound.add('swim');
            swimSound.play();
        }
         else {
            shrimp.body.velocity.setTo(0, 0);
        }
    },

    CollisionStar: function() {
        this.winText.alpha = 1;
        this.timerGame.paused = true;
        let timerContinue = this.time.addEvent({
                delay: 2000,
                callback: this.nextLevel,
                callbackScope: this
            });
    },

    CollisionWall: function() {
        //alert();
    },

    nextLevel: function () {
        this.scene.start('mainscene');
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
                //this.scene.Scene1.removeAll();
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