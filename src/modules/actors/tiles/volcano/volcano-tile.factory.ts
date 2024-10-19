import { Color } from 'excalibur'
import {
  BaseTileActorFactory,
  BaseTileActorFactoryCreateTileActorArgs,
} from '../base'
import { VolcanoTileActor } from './volcano-tile.actor'

export interface VolcanoTileActorFactoryCreateTileActorArgs
  extends BaseTileActorFactoryCreateTileActorArgs {}

export class VolcanoTileActorFactory extends BaseTileActorFactory {
  public createTileActor({
    x,
    y,
  }: BaseTileActorFactoryCreateTileActorArgs): VolcanoTileActor {
    const p = Math.random()

    return new VolcanoTileActor({
      x,
      y,
      color:
        p < 0.125 ? Color.Vermilion : p < 0.25 ? Color.Red : Color.DarkGray,
      variation: Math.floor(
        Math.random() * VolcanoTileActor.NumberOfVariations,
      ),
    })
  }
}
