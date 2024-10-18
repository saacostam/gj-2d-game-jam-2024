import { BaseTileActor } from './base-tile.actor'

export interface BaseTileActorFactoryCreateTileActorArgs {
  x: number
  y: number
}

export class BaseTileActorFactory {
  public createTileActor({
    x,
    y,
  }: BaseTileActorFactoryCreateTileActorArgs): BaseTileActor {
    return new BaseTileActor({
      x: x,
      y: y,
    })
  }
}
