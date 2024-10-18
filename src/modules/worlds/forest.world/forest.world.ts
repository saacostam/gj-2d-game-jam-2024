import { ForestTileActorFactory } from '../../actors/tiles'
import { BaseWorld } from '../base-world.world'
import { WorldPosition, WorldType } from '../types'

export interface ForestWolrdArgs {
  position: WorldPosition
}

export class ForestWorld extends BaseWorld {
  constructor({ position }: ForestWolrdArgs) {
    super({
      worldSeed: {
        type: WorldType.FOREST,
        position: position,
      },
      tileActorFactory: new ForestTileActorFactory(),
    })
  }
}
