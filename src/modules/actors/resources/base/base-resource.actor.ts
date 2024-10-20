import { Actor, Collider, CollisionType, Color, Vector } from 'excalibur'
import { WORLD_CONFIG } from '../../../config'

export interface BaseResourceActorArgs {
  x: number
  y: number
  collisionType?: CollisionType
  collider?: Collider
  anchor?: Vector
}

export class BaseResourceActor extends Actor {
  constructor({ x, y, collisionType, collider, anchor }: BaseResourceActorArgs) {
    super({
      x: x,
      y: y,
      z: y,
      width: WORLD_CONFIG.TILE_SIZE,
      height: WORLD_CONFIG.TILE_SIZE,
      color: Color.Green,
      collisionType: collisionType,
      collider: collider,
      anchor: anchor,
    })
  }
}
