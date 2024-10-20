import { Actor, Color } from 'excalibur'
import { WORLD_CONFIG } from '../../config'
import { PlayerGraphics } from './player.graphics'

export interface PlayerArgs {
  x: number
  y: number
}

export class Player extends Actor {
  constructor({ x, y }: PlayerArgs) {
    super({
      x: x,
      y: y,
      z: 20,
      width: (WORLD_CONFIG.TILE_SIZE * 3) / 4,
      height: (WORLD_CONFIG.TILE_SIZE * 3) / 4,
      color: Color.Rose,
    })

    this.graphics.use(PlayerGraphics.sprite)
    this.graphics.use(PlayerGraphics.animations.idleDown)
  }
}
