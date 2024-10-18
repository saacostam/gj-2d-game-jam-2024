import { Color } from 'excalibur'
import { BaseTileActor } from '../base'

export interface ForestTileActorArgs {
  x: number
  y: number
}

export class ForestTileActor extends BaseTileActor {
  constructor({ x, y }: ForestTileActorArgs) {
    super({
      color: Color.Green,
      x,
      y,
    })
  }
}
