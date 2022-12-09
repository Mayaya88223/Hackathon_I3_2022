let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent:'game-wrapper',
    physics: {
        default: 'arcade'
    },
    scene: {
        preload : preload,     
        create: create
    }
};

let game = new Phaser.Game(config);
let text = true ; 
let matchCounter = 0;
let selectedNumber = null;
let matched = false;

function preload(){
    
    this.load.svg('NumberFr0' , 'assets/Jeux/images/fr0.svg')
    this.load.svg('NumberCn0' , 'assets/Jeux/images/zh0.svg')
    this.load.svg('NumberFr4' , 'assets/Jeux/images/fr4.svg')
    this.load.svg('NumberCn4' , 'assets/Jeux/images/zh4.svg')
    this.load.svg('NumberFr5' , 'assets/Jeux/images/fr5.svg')
    this.load.svg('NumberCn5' , 'assets/Jeux/images/zh5.svg')
    this.load.svg('NumberFr6' , 'assets/Jeux/images/fr6.svg')
    this.load.svg('NumberCn6' , 'assets/Jeux/images/zh6.svg')
    this.load.svg('NumberFr7' , 'assets/Jeux/images/fr7.svg')
    this.load.svg('NumberCn7' , 'assets/Jeux/images/zh7.svg')
    this.load.svg('NumberFr8' , 'assets/jeux/images/fr8.svg')
    this.load.svg('NumberCn8' , 'assets/jeux/images/zh8.svg')
    this.load.svg('NumberFr9' , 'assets/jeux/images/fr9.svg')
    this.load.svg('NumberCn9' , 'assets/jeux/images/zh9.svg')
    this.load.svg('NumberFr10' , 'assets/jeux/images/fr10.svg')
    this.load.svg('NumberCn10' , 'assets/jeux/images/zh10.svg')
    
    this.load.image('Next' , 'assets/jeux/images/nextButton.png')
    this.load.image('background' ,'assets/jeux/images/blueBackground.png')

    this.load.audio('sound0', 'assets/jeux/son/nb-0.mp3');
    this.load.audio('sound4', 'assets/jeux/son/nb-4.mp3');
    this.load.audio('sound5', 'assets/jeux/son/nb-5.mp3');
    this.load.audio('sound6', 'assets/jeux/son/nb-6.mp3');
    this.load.audio('sound7', 'assets/jeux/son/nb-7.mp3');
    this.load.audio('sound8', 'assets/jeux/son/nb-8.mp3');
    this.load.audio('sound9', 'assets/jeux/son/nb-9.mp3');
    this.load.audio('sound10', 'assets/jeux/son/nb-10.mp3');
}

function create(){

    let backImage = this.add.image(0, 0,'background');
    backImage.setOrigin(0, 0);
    
    let numberFr0 = this.add.image(50,250,'NumberFr0').setInteractive().setScale(0.5);
    numberFr0.name = "pair0";
    let numberCn0 = this.add.image(550,450,'NumberCn0').setInteractive().setScale(0.5);
    numberCn0.name = "pair0";
    let numberFr4 = this.add.image(50,450,'NumberFr4').setInteractive().setScale(0.5);
    numberFr4.name = "pair4";
    let numberCn4 = this.add.image(250,450,'NumberCn4').setInteractive().setScale(0.5);
    numberCn4.name = "pair4";
    let numberFr5 = this.add.image(350,250,'NumberFr5').setInteractive().setScale(0.5);
    numberFr5.name = "pair5";
    let numberCn5 = this.add.image(450,450,'NumberCn5').setInteractive().setScale(0.5);
    numberCn5.name = "pair5";
    let numberFr6 = this.add.image(550,250,'NumberFr6').setInteractive().setScale(0.5);
    numberFr6.name = "pair6";
    let numberCn6 = this.add.image(250,250,'NumberCn6').setInteractive().setScale(0.5);
    numberCn6.name = "pair6";
    let numberFr7 = this.add.image(450,250,'NumberFr7').setInteractive().setScale(0.5);
    numberFr7.name = "pair7";
    let numberCn7 = this.add.image(150,250,'NumberCn7').setInteractive().setScale(0.5);
    numberCn7.name = "pair7";
    let numberFr8 = this.add.image(350,450,'NumberFr8').setInteractive().setScale(0.5);
    numberFr8.name = "pair8";
    let numberCn8 = this.add.image(150,450,'NumberCn8').setInteractive().setScale(0.5);
    numberCn8.name = "pair8";
    let numberFr9 = this.add.image(650,450,'NumberFr9').setInteractive().setScale(0.5);
    numberFr9.name = "pair9";
    let numberCn9 = this.add.image(750,250,'NumberCn9').setInteractive().setScale(0.5);
    numberCn9.name = "pair9";
    let numberFr10 = this.add.image(750,450,'NumberFr10').setInteractive().setScale(0.5);
    numberFr10.name = "pair10";
    let numberCn10 = this.add.image(650,250,'NumberCn10').setInteractive().setScale(0.5);
    numberCn10.name = "pair10";

    next = this.physics.add.image(700,500,'Next').setInteractive().setScale(0.4).setVisible(false);
    next.on('pointerdown', nextLevel, this);
    
    instructionText = this.add.text(70, 80, 'Cliquez sur les bonnes paires !');
    instructionText.setTint(0xbb4430, 0xbb4430, 0xbb4430, 0xbb4430).setScale(1.7);

    this.input.on('gameobjectdown', selectNumber, this);

    sound0 = this.sound.add('sound0');
    sound0.name = "pair0";
    sound4 = this.sound.add('sound4');
    sound4.name = "pair4";
    sound5 = this.sound.add('sound5');
    sound6 = this.sound.add('sound6');
    sound7 = this.sound.add('sound7');
    sound8 = this.sound.add('sound8');
    sound9 = this.sound.add('sound9');
    sound10 = this.sound.add('sound10');
}

function selectNumber(pointer, number , eventdata)
{
    if (!this.selectedNumber)
    {
        //  1

        this.selectedNumber = number;
    }
    else if (number !== this.selectedNumber)
    {
        //  2

        if (number.name == this.selectedNumber.name)
        {

            this.tweens.add({
                targets: [ number, this.selectedNumber ],
                scale: 0.8,
                angle: '-=30',
                yoyo: true,
                ease: 'sine.inout',
                duration: 200,
                completeDelay: 200,
                onComplete: () => destroyMatch(number, this.selectedNumber)
            });
    
            var pair = number.name;
            switch (pair){
                case "pair0" : sound0.play();
                break;
                case "pair4" : sound4.play();
                break;
                case "pair5" : sound5.play();
                break;
                case "pair6" : sound6.play();
                break;
                case "pair7" : sound7.play();
                break;
                case "pair8" : sound8.play();
                break;
                case "pair9" : sound8.play();
                break;
                case "pair10" : sound10.play();
                break;
            }
            matchCounter++;
            win(this);
        }
        else
        {

            this.tweens.add({
                targets: [ number, this.selectedNumber ],
                angle: 15,
                duration: 100,
                ease: 'Linear',
                yoyo: true,
                repeat: 1,
                paused: true
            });

            this.selectedNumber = number;
        }
    }
}

function destroyMatch(nb1, nb2){
    nb1.destroy();
    nb2.destroy();
}

function win(t)
{
    if(matchCounter >= 8){
        next.setVisible(true);
        winText = t.add.text(200, 250, 'YOU WIN  你赢了 ');
        winText.setTint(0xbb4430, 0xbb4430, 0xbb4430, 0xbb4430);
        winText.setScale(3);
        dbUpdate();
        alert("Saved");
    }
}

function nextLevel(){

    var url = 'index.php?page=learn-and-play/learn-and-play-2.html';

    var s = window.open(url);

    if (s && s.focus)
    {
        s.focus();
    }
    else if (!s)
    {
        window.location.href = url;
    }
}

function dbUpdate(){
    
    fetch("./View/test/Compte/6_savegameTraitement.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            level: 2,
            Succeed: true,
            category: 'chiffres'
        })
    }).then(res => {
        return res.json(); alert(res);
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
}