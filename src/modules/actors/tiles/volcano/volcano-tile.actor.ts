import { Color } from 'excalibur'
import { BaseTileActor, BaseTileActorArgs } from '../base'

export interface VolcanoTileActorArgs extends BaseTileActorArgs {}

export class VolcanoTileActor extends BaseTileActor {
  constructor({ x, y, color }: VolcanoTileActorArgs) {
    super({
      x: x,
      y: y,
      color: color || Color.Vermilion,
    })
  }
}
