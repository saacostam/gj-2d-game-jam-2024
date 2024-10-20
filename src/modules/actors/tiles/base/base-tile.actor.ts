import { Actor, CollisionType, Color } from 'excalibur'
import { WORLD_CONFIG } from '../../../config'
import { ORTHOGONAL_ROTATIONS } from '../../../physics'

export interface BaseTileActorArgs {
  color?: Color
  x: number
  y: number
  shouldRotateRandomly?: boolean
  collisionType?: CollisionType
}

export class BaseTileActor extends Actor {
  static NumberOfVariations: number = 4

  constructor({
    color,
    x,
    y,
    shouldRotateRandomly = true,
    collisionType = CollisionType.Passive,
  }: BaseTileActorArgs) {
    super({
      width: WORLD_CONFIG.TILE_SIZE,
      height: WORLD_CONFIG.TILE_SIZE,
      color: color || Color.Magenta,
      x: x,
      y: y,
      collisionType: collisionType,
    })

    if (shouldRotateRandomly) {
      this.rotation =
        ORTHOGONAL_ROTATIONS[
          Math.floor(Math.random() * ORTHOGONAL_ROTATIONS.length)
        ]
    }
  }
}
