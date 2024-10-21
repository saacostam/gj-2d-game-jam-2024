import { Actor, CollisionType } from 'excalibur'
import { WORLD_CONFIG } from '../../config'
import { MobGraphics } from './mob.graphics'

export interface MobActorArgs {
  x: number
  y: number
}

export class MobActor extends Actor {
  constructor({ x, y }: MobActorArgs) {
    super({
      x,
      y,
      collisionType: CollisionType.Active,
      width: WORLD_CONFIG.TILE_SIZE,
      height: WORLD_CONFIG.TILE_SIZE,
    })

    this.graphics.use(MobGraphics.sprite)
    this.graphics.use(MobGraphics.animation)
  }
}
