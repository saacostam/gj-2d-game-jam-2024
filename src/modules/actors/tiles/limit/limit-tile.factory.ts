import {
  BaseTileActorFactory,
  BaseTileActorFactoryCreateTileActorArgs,
} from '../base'
import { LimitTileActor } from './limit-tile.actor'

export interface LimitTileActorFactoryCreateTileActorArgs
  extends BaseTileActorFactoryCreateTileActorArgs {}

export class LimitTileActorFactory extends BaseTileActorFactory {
  public createTileActor({
    x,
    y,
  }: LimitTileActorFactoryCreateTileActorArgs): LimitTileActor {
    return new LimitTileActor({
      x,
      y,
    })
  }
}
