import { SpriteSheet } from 'excalibur'
import { playerImage } from '../images'

export const playerSpritesheet = SpriteSheet.fromImageSource({
  image: playerImage,
  grid: {
    rows: 3,
    columns: 4,
    spriteWidth: 6,
    spriteHeight: 6,
  },
})
