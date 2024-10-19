import { Color } from 'excalibur'
import { BaseTileActor, BaseTileActorArgs } from '../base'
import { caveTileAnimationVariations } from './cave-tile.animation'

export interface CaveTileActorArgs extends BaseTileActorArgs {
  variation: number
}

export class CaveTileActor extends BaseTileActor {
  constructor({ x, y, color, variation }: CaveTileActorArgs) {
    super({
      x: x,
      y: y,
      color: color || Color.Gray,
    })

    this.graphics.use(
      caveTileAnimationVariations[
        variation % caveTileAnimationVariations.length
      ].sprite,
    )
    this.graphics.use(
      caveTileAnimationVariations[
        variation % caveTileAnimationVariations.length
      ].animation,
    )
  }
}
