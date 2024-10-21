import { SpriteSheet } from 'excalibur'
import { treeImage } from '../images'

export const treeSpritesheet = SpriteSheet.fromImageSource({
  image: treeImage,
  grid: {
    rows: 5,
    columns: 4,
    spriteWidth: 8,
    spriteHeight: 8,
  },
})
