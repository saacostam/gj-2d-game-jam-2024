import {
  BaseTileActorFactory,
  BaseTileActorFactoryCreateTileActorArgs,
} from '../base'
import { ForestTileActor } from './forest-tile.actor'

export interface ForestTileActorFactoryCreateTileActorArgs
  extends BaseTileActorFactoryCreateTileActorArgs {}

export class ForestTileActorFactory extends BaseTileActorFactory {
  public createTileActor({
    x,
    y,
  }: ForestTileActorFactoryCreateTileActorArgs): ForestTileActor {
    return new ForestTileActor({
      x: x,
      y: y,
    })
  }
}
