import { TundraTileActorFactory } from '../../actors/tiles'
import { BaseWorld } from '../base-world.world'
import { WorldPosition, WorldType } from '../types'

export interface TundraWorldArgs {
  position: WorldPosition
}

export class TundraWorld extends BaseWorld {
  constructor({ position }: TundraWorldArgs) {
    super({
      worldSeed: {
        type: WorldType.TUNDRA,
        position: position,
      },
      tileActorFactory: new TundraTileActorFactory(),
    })
  }
}
