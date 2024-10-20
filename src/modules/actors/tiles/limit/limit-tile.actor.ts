import { CollisionType, Color } from 'excalibur'
import { BaseTileActor, BaseTileActorArgs } from '../base'
import { limitTileAnimationVariations } from './limit-tile.animation'

export interface LimitTileActorArgs extends BaseTileActorArgs {}

export class LimitTileActor extends BaseTileActor {
  constructor({ x, y, color }: LimitTileActorArgs) {
    super({
      x: x,
      y: y,
      color: color || Color.Black,
      collisionType: CollisionType.Fixed,
    })

    this.graphics.use(limitTileAnimationVariations[0].sprite)
    this.graphics.use(limitTileAnimationVariations[0].animation)
  }
}
