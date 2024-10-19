import { Actor, Color } from 'excalibur'
import { WORLD_CONFIG } from '../../../config'

export interface BaseTileActorArgs {
  color?: Color
  x: number
  y: number
}

export class BaseTileActor extends Actor {
  static NumberOfVariations: number = 4

  constructor({ color, x, y }: BaseTileActorArgs) {
    super({
      width: WORLD_CONFIG.TILE_SIZE,
      height: WORLD_CONFIG.TILE_SIZE,
      color: color || Color.Magenta,
      x: x,
      y: y,
    })
  }
}
