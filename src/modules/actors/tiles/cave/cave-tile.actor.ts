import { Color } from 'excalibur'
import { BaseTileActor, BaseTileActorArgs } from '../base'

export interface CaveTileActorArgs extends BaseTileActorArgs {}

export class CaveTileActor extends BaseTileActor {
  constructor({ x, y, color }: CaveTileActorArgs) {
    super({
      x: x,
      y: y,
      color: color || Color.Gray,
    })
  }
}
