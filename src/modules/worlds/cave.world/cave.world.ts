import { CaveTileActorFactory } from '../../actors/tiles'
import { BaseWorld } from '../base-world.world'
import { WorldPosition, WorldType } from '../types'

export interface CaveWorldArgs {
  position: WorldPosition
}

export class CaveWorld extends BaseWorld {
  constructor({ position }: CaveWorldArgs) {
    super({
      worldSeed: {
        type: WorldType.CAVE,
        position: position,
      },
      tileActorFactory: new CaveTileActorFactory(),
    })
  }
}
