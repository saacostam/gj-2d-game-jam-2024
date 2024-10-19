import { Color } from 'excalibur'
import { BaseTileActor, BaseTileActorArgs } from '../base'

export interface TundraTileActorArgs extends BaseTileActorArgs {}

export class TundraTileActor extends BaseTileActor {
  constructor({ x, y, color }: TundraTileActorArgs) {
    super({
      x: x,
      y: y,
      color: color || Color.White,
    })
  }
}
