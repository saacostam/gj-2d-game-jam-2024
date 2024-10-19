import { Color } from 'excalibur'
import { BaseTileActor, BaseTileActorArgs } from '../base'
import { volcanoTileAnimationVariations } from './volcano-tile.animation'

export interface VolcanoTileActorArgs extends BaseTileActorArgs {
  variation: number
}

export class VolcanoTileActor extends BaseTileActor {
  constructor({ x, y, color, variation }: VolcanoTileActorArgs) {
    super({
      x: x,
      y: y,
      color: color || Color.Vermilion,
    })

    this.graphics.use(
      volcanoTileAnimationVariations[
        variation % volcanoTileAnimationVariations.length
      ].sprite,
    )
    this.graphics.use(
      volcanoTileAnimationVariations[
        variation % volcanoTileAnimationVariations.length
      ].animation,
    )
  }
}
