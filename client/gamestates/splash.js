var Splash = function (game) {},
    playSound = true,
    playMusic = true,
    music;

Splash.prototype = {

  loadScripts: function () {
    this.game.load.script('WebFont', 'lib/bower-webfontloader/webfont.js');
    this.game.load.script('gamemenu','gamestates/gamemenu.js');
    this.game.load.script('thegame', 'gamestates/game.js');
    this.game.load.script('gameover','gamestates/gameover.js');
    this.game.load.script('credits', 'gamestates/credits.js');
    this.game.load.script('options', 'gamestates/options.js');
  },

  loadBgm: function () {
    // thanks Kevin Macleod at http://incompetech.com/
    this.game.load.audio('dangerous', 'assets/bgm/Dangerous.mp3');
    this.game.load.audio('exit', 'assets/bgm/Exit the Premises.mp3');
  },
  // varios freebies found from google image search
  loadImages: function () {
    this.game.load.image('menu-bg', 'assets/images/menu-bg.jpg');
    this.game.load.image('options-bg', 'assets/images/options-bg.jpg');
    this.game.load.image('gameover-bg', 'assets/images/gameover-bg.jpg');
  },

  loadFonts: function () {
    WebFontConfig = {
      custom: {
        families: ['TheMinion'],
        urls: ['assets/style/theminion.css']
      }
    }
  },

  init: function () {
    this.loadingBar = this.game.make.sprite(this.game.world.centerX-(387/2), 400, "loading");
    this.logo       = this.game.make.sprite(this.game.world.centerX, 200, 'brand');
    this.status     = this.game.make.text(this.game.world.centerX, 380, 'Loading...', {fill: 'white'});
    utils.centerGameObjects([this.logo, this.status]);
  },

  preload: function () {
    this.game.add.sprite(0, 0, 'stars');
    this.game.add.existing(this.logo).scale.setTo(0.5);
    this.game.add.existing(this.loadingBar);
    this.game.add.existing(this.status);
    this.load.setPreloadSprite(this.loadingBar);

    this.loadScripts();
    this.loadImages();
    this.loadFonts();
    this.loadBgm();

  },

  addGameStates: function () {
    this.game.state.add("GameMenu",GameMenu);
    this.game.state.add("Game",Game);
    this.game.state.add("GameOver",GameOver);
    this.game.state.add("Credits",Credits);
    this.game.state.add("Options",Options);
  },

  addGameMusic: function () {
    music = this.game.add.audio('dangerous');
    music.loop = true;
    music.play();
  },

  create: function() {
    this.status.setText('Ready!');
    this.addGameStates();
    this.addGameMusic();
    var self = this;

    setTimeout(function () {
      // load the main menu here
      self.game.state.start("GameMenu");
    }, 1000);
  }
};