import { Animation, Sprite } from 'excalibur'
import { mobImage, mobSpritesheet } from '../../assets'

export const MobGraphics = {
  sprite: new Sprite({
    image: mobImage,
  }),
  animation: Animation.fromSpriteSheetCoordinates({
    spriteSheet: mobSpritesheet,
    frameCoordinates: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0,
        y: 1,
      },
    ],
  }),
}
