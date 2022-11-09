var MainScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function MainScene ()
    {
        Phaser.Scene.call(this, { key: 'mainscene' });
        this.music;
    },

    preload: function ()
    {
        this.load.image('MainScreen', './Assets/MainScreen.png');
        this.load.audio('music', './Assets/warrio.mp3');
        
    },

    mouseOver: function () {
        this.playText.setColor("#ff0000");
    },

    mouseOut: function () {
        this.playText.setColor("#ffffff");
    },

    mouseDown: function () {
        this.music.stop();
        this.scene.start('scene1');
    },

    create: function ()
    {
        this.scale.pageAlignHorizontally = true;
        
        var bg = this.add.image(0, 0, 'MainScreen');    
        bg.setOrigin(0, 0);
        bg.setScale(0.89,1.05);
        var style = {
            font: "bold 32px Arial",
            fill: "#fff",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        this.playText = this.add.text(440, 253, "PLAY AGAIN", style);
        this.playText.setInteractive();
        this.playText.on('pointerdown', this.mouseDown, this);
        this.playText.on('pointerover', this.mouseOver, this);
        this.playText.on('pointerout', this.mouseOut, this);
        this.music = this.sound.add('music');
        this.music.play();
    },

    update: function ()
    {
        
    }
});
