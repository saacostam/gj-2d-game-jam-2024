import { Sprite, Animation } from 'excalibur'

export interface BaseResourceGraphics {
  sprite: Sprite
  animations: {
    full: Animation
    threeQuarters: Animation
    half: Animation
    quarter: Animation
  }
}
