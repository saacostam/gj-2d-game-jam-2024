import { Color } from 'excalibur'
import {
  BaseTileActorFactory,
  BaseTileActorFactoryCreateTileActorArgs,
} from '../base'
import { TundraTileActor } from './tundra-tile.actor'

export interface TundraTileActorFactoryCreateTileActorArgs
  extends BaseTileActorFactoryCreateTileActorArgs {}

export class TundraTileActorFactory extends BaseTileActorFactory {
  public createTileActor({
    x,
    y,
  }: TundraTileActorFactoryCreateTileActorArgs): TundraTileActor {
    return new TundraTileActor({
      x,
      y,
      color: Math.random() < 0.15 ? Color.ExcaliburBlue : Color.White,
      variaton: Math.floor(Math.random() * TundraTileActor.NumberOfVariations),
    })
  }
}
