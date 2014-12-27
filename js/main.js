var WelcomeBack = WelcomeBack || {};

WelcomeBack.game = new Phaser.Game(480, 320, Phaser.CANVAS, '');

WelcomeBack.game.state.add('Boot',            WelcomeBack.Boot);
WelcomeBack.game.state.add('Preload',         WelcomeBack.Preload);
WelcomeBack.game.state.add('MainMenu',        WelcomeBack.MainMenu);
WelcomeBack.game.state.add('IntroLevelOne',   WelcomeBack.IntroLevelOne);
WelcomeBack.game.state.add('LevelOne',        WelcomeBack.LevelOne);
WelcomeBack.game.state.add('IntroLevelTwo',   WelcomeBack.IntroLevelTwo);
WelcomeBack.game.state.add('LevelTwo',        WelcomeBack.LevelTwo);
WelcomeBack.game.state.add('IntroLevelThree', WelcomeBack.IntroLevelThree);
WelcomeBack.game.state.add('LevelThree',      WelcomeBack.LevelThree);
WelcomeBack.game.state.add('Winner',          WelcomeBack.Winner);
WelcomeBack.deathCounter = 0;
WelcomeBack.game.state.start('Boot');