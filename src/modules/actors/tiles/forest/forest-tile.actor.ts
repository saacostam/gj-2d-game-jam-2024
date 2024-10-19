import { Color } from 'excalibur'
import { BaseTileActor, BaseTileActorArgs } from '../base'

export interface ForestTileActorArgs extends BaseTileActorArgs {}

export class ForestTileActor extends BaseTileActor {
  constructor({ x, y, color }: ForestTileActorArgs) {
    super({
      x: x,
      y: y,
      color: color || Color.Green,
    })
  }
}
