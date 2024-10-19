import { Color } from 'excalibur'
import {
  BaseTileActorFactory,
  BaseTileActorFactoryCreateTileActorArgs,
} from '../base'
import { CaveTileActor } from './cave-tile.actor'

export interface CaveTileActorFactoryCreateTileActorArgs
  extends BaseTileActorFactoryCreateTileActorArgs {}

export class CaveTileActorFactory extends BaseTileActorFactory {
  public createTileActor({
    x,
    y,
  }: CaveTileActorFactoryCreateTileActorArgs): CaveTileActor {
    return new CaveTileActor({
      x,
      y,
      color: Math.random() < 0.35 ? Color.Gray : Color.LightGray,
    })
  }
}
