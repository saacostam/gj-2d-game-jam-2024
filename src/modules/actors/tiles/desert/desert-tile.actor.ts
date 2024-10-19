import { Color } from 'excalibur'
import { BaseTileActor, BaseTileActorArgs } from '../base'

export interface DesetTileActorArgs extends BaseTileActorArgs {}

export class DesertTileActor extends BaseTileActor {
  constructor({ x, y, color }: DesetTileActorArgs) {
    super({
      x: x,
      y: y,
      color: color || Color.Yellow,
    })
  }
}
