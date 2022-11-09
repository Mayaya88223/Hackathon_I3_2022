let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },
    scene: [ MainScene, Scene1, Scene2, Scene3, Scene4, Scene5 ]
};
