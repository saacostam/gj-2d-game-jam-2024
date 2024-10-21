import { SpriteSheet } from 'excalibur'
import { mobImage } from '../images'

export const mobSpritesheet = SpriteSheet.fromImageSource({
  image: mobImage,
  grid: {
    rows: 2,
    columns: 1,
    spriteWidth: 6,
    spriteHeight: 6,
  },
})
