import { Color } from 'excalibur'
import {
  BaseTileActorFactory,
  BaseTileActorFactoryCreateTileActorArgs,
} from '../base'
import { DesertTileActor } from './desert-tile.actor'

export interface DesertTileActorFactoryCreateTileActorArgs
  extends BaseTileActorFactoryCreateTileActorArgs {}

export class DesertTileActorFactory extends BaseTileActorFactory {
  public createTileActor({
    x,
    y,
  }: BaseTileActorFactoryCreateTileActorArgs): DesertTileActor {
    return new DesertTileActor({
      x,
      y,
      color: Math.random() < 0.25 ? Color.Orange : Color.Yellow,
      variation: Math.floor(Math.random() * DesertTileActor.NumberOfVariations),
    })
  }
}
