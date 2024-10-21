import { Color, Engine } from 'excalibur'
import './style.css'
import { GAME_CONFIG } from './modules/config'
import { MainScene, SceneKey } from './modules/scenes'
import { loader } from './modules/assets'
import { gameOverCounterHtmlElement } from './modules/ui'
import { UrlUtils } from './modules/url'

gameOverCounterHtmlElement.innerText = `❌ ${UrlUtils.getLostCount().toString()}`

const game = new Engine({
  width: GAME_CONFIG.WIDTH * 3,
  height: GAME_CONFIG.HEIGHT * 3,
  resolution: { width: GAME_CONFIG.WIDTH, height: GAME_CONFIG.HEIGHT },
  backgroundColor: Color.Transparent,
  pixelArt: true,
  pixelRatio: 2,
  antialiasing: false,
  canvasElementId: 'game-canvas',
})

game.addScene(SceneKey.MAIN, new MainScene())

game.start(loader)
game.goToScene(SceneKey.MAIN)
