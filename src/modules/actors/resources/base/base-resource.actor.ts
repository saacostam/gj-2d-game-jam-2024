import { Actor, Color } from 'excalibur'
import { WORLD_CONFIG } from '../../../config'

export interface BaseResourceActorArgs {
  x: number
  y: number
}

export class BaseResourceActor extends Actor {
  constructor({ x, y }: BaseResourceActorArgs) {
    super({
      x: x,
      y: y,
      width: WORLD_CONFIG.TILE_SIZE,
      height: WORLD_CONFIG.TILE_SIZE,
      color: Color.Green,
    })
  }
}
