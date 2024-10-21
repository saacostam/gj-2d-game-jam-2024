import { Actor, CollisionType, Color, Sprite } from 'excalibur'
import { WORLD_CONFIG } from '../../config'
import { pointerImage } from '../../assets'

export interface PointerActorArgs {
  x: number
  y: number
}

export class PointerActor extends Actor {
  constructor({ x, y }: PointerActorArgs) {
    super({
      collisionType: CollisionType.PreventCollision,
      width: WORLD_CONFIG.TILE_SIZE,
      height: WORLD_CONFIG.TILE_SIZE,
      color: Color.Violet,
      x: x,
      y: y,
      z: 1000,
    })

    this.graphics.use(
      new Sprite({
        image: pointerImage,
      }),
    )
  }
}
