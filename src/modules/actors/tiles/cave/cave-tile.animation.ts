import { Sprite } from 'excalibur'
import { worldTilesImage, worldTilesSpritesheet } from '../../../assets'
import { AnimationUtils } from '../utils'
import { TileGraphic } from '../types'

export const caveTileAnimationVariations: TileGraphic[] = []

for (let index = 0; index < 4; index++) {
  caveTileAnimationVariations.push({
    sprite: new Sprite({
      image: worldTilesImage,
    }),
    animation: AnimationUtils.getTileAnimation({
      spriteSheet: worldTilesSpritesheet,
      firstFrameX: index,
      firstFrameY: 4,
    }),
  })
}
