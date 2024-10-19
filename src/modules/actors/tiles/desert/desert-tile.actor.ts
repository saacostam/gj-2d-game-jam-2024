import { Color } from 'excalibur'
import { BaseTileActor, BaseTileActorArgs } from '../base'
import { desertTileAnimationVariations } from './desert-tile.animation'

export interface DesetTileActorArgs extends BaseTileActorArgs {
  variation: number
}

export class DesertTileActor extends BaseTileActor {
  constructor({ x, y, color, variation }: DesetTileActorArgs) {
    super({
      x: x,
      y: y,
      color: color || Color.Yellow,
    })

    this.graphics.use(
      desertTileAnimationVariations[
        variation % desertTileAnimationVariations.length
      ].sprite,
    )
    this.graphics.use(
      desertTileAnimationVariations[
        variation % desertTileAnimationVariations.length
      ].animation,
    )
  }
}
