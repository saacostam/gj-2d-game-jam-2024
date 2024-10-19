import { Color } from 'excalibur'
import { BaseTileActor, BaseTileActorArgs } from '../base'
import { tundraTileAnimationVariations } from './tundra-tile.animation'

export interface TundraTileActorArgs extends BaseTileActorArgs {
  variaton: number
}

export class TundraTileActor extends BaseTileActor {
  constructor({ x, y, color, variaton }: TundraTileActorArgs) {
    super({
      x: x,
      y: y,
      color: color || Color.White,
    })

    this.graphics.use(
      tundraTileAnimationVariations[
        variaton % tundraTileAnimationVariations.length
      ].sprite,
    )
    this.graphics.use(
      tundraTileAnimationVariations[
        variaton % tundraTileAnimationVariations.length
      ].animation,
    )
  }
}
