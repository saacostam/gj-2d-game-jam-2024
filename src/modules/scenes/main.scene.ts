import { Engine, Scene } from 'excalibur'
import {
  BaseWorld,
  CaveWorld,
  DesertWorld,
  ForestWorld,
  WorldPosition,
} from '../worlds'

export class MainScene extends Scene {
  public onInitialize(_engine: Engine<any>): void {
    const worlds: BaseWorld[] = [
      new ForestWorld({
        position: WorldPosition.TOP_LEFT,
      }),
      new DesertWorld({
        position: WorldPosition.TOP_RIGHT,
      }),
      new CaveWorld({
        position: WorldPosition.BOTTOM_LEFT,
      }),
      new ForestWorld({
        position: WorldPosition.BOTTOM_RIGHT,
      }),
    ]

    worlds.forEach((world) => {
      this.add(world)
    })
  }
}
