import { Color } from 'excalibur'
import { BaseTileActor } from '../base'

export interface ForestTileActorArgs {
  x: number
  y: number
  color?: Color
}

export class ForestTileActor extends BaseTileActor {
  constructor({ x, y, color }: ForestTileActorArgs) {
    super({
      color: color || Color.Green,
      x,
      y,
    })
  }
}
