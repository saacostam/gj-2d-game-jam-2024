import { Color } from 'excalibur'
import { BaseTileActor, BaseTileActorArgs } from '../base'
import { forestTileAnimationVariations } from './forest-tile.animation'

export interface ForestTileActorArgs extends BaseTileActorArgs {
  variation: number
}

export class ForestTileActor extends BaseTileActor {
  constructor({ x, y, color, variation }: ForestTileActorArgs) {
    super({
      x: x,
      y: y,
      color: color || Color.Green,
    })

    this.graphics.use(
      forestTileAnimationVariations[
        variation % forestTileAnimationVariations.length
      ].sprite,
    )
    this.graphics.use(
      forestTileAnimationVariations[
        variation % forestTileAnimationVariations.length
      ].animation,
    )
  }
}
