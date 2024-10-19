import { SpriteSheet } from 'excalibur'
import { worldTilesImage } from '../images'

export const worldTilesSpritesheet = SpriteSheet.fromImageSource({
  image: worldTilesImage,
  grid: {
    rows: 16,
    columns: 4,
    spriteWidth: 8,
    spriteHeight: 8,
  },
})
