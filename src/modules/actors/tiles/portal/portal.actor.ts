import { Color } from 'excalibur'
import { BaseTileActor, BaseTileActorArgs } from '../base'
import { PortalGraphics } from './portal.graphics'

export interface PortalTileActorArgs extends BaseTileActorArgs {}

export class PortalTileActor extends BaseTileActor {
  constructor({ x, y, color }: PortalTileActorArgs) {
    super({
      x: x,
      y: y,
      color: color || Color.White,
    })

    this.graphics.use(PortalGraphics.sprite)
    this.graphics.use(PortalGraphics.animations.idle)
  }
}
