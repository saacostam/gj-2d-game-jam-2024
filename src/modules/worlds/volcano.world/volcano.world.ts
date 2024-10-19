import { VolcanoTileActorFactory } from '../../actors/tiles'
import { BaseWorld } from '../base-world.world'
import { WorldPosition, WorldType } from '../types'

export interface VolcanoWorldArgs {
  position: WorldPosition
}

export class VolcanoWorld extends BaseWorld {
  constructor({ position }: VolcanoWorldArgs) {
    super({
      worldSeed: {
        type: WorldType.VOLCANO,
        position: position,
      },
      tileActorFactory: new VolcanoTileActorFactory(),
    })
  }
}
