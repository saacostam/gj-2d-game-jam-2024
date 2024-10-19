import { DesertTileActorFactory } from '../../actors/tiles'
import { BaseWorld } from '../base-world.world'
import { WorldPosition, WorldType } from '../types'

export interface DesertWorldArgs {
  position: WorldPosition
}

export class DesertWorld extends BaseWorld {
  constructor({ position }: DesertWorldArgs) {
    super({
      worldSeed: {
        type: WorldType.DESERT,
        position: position,
      },
      tileActorFactory: new DesertTileActorFactory(),
    })
  }
}
