import { Sprite } from 'excalibur'
import { worldTilesImage, worldTilesSpritesheet } from '../../../resources'
import { AnimationUtils } from '../utils'
import { TileGraphic } from '../types'

export const desertTileAnimationVariations: TileGraphic[] = []

for (let index = 0; index < 4; index++) {
  desertTileAnimationVariations.push({
    sprite: new Sprite({
      image: worldTilesImage,
    }),
    animation: AnimationUtils.getTileAnimation({
      spriteSheet: worldTilesSpritesheet,
      firstFrameX: index,
      firstFrameY: 1,
    }),
  })
}
