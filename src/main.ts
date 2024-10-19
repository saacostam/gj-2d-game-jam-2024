import { Color, Engine } from 'excalibur'
import './style.css'
import { GAME_CONFIG } from './modules/config'
import { MainScene, SceneKey } from './modules/scenes'
import { loader } from './modules/resources'

const game = new Engine({
  width: GAME_CONFIG.WIDTH * 2,
  height: GAME_CONFIG.HEIGHT * 2,
  resolution: { width: GAME_CONFIG.WIDTH, height: GAME_CONFIG.HEIGHT },
  backgroundColor: Color.Transparent,
  pixelArt: true,
  pixelRatio: 2,
  antialiasing: false,
})

game.addScene(SceneKey.MAIN, new MainScene())

game.start(loader)
game.goToScene(SceneKey.MAIN)
