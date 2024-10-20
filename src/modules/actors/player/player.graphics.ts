import { Animation, Sprite } from 'excalibur'
import { playerImage, playerSpritesheet } from '../../resources'

export const PlayerGraphics = {
  sprite: new Sprite({
    image: playerImage,
  }),
  animations: {
    idleDown: Animation.fromSpriteSheetCoordinates({
      spriteSheet: playerSpritesheet,
      frameCoordinates: [
        {
          x: 0,
          y: 0,
        },
      ],
    }),
    idleSides: Animation.fromSpriteSheetCoordinates({
      spriteSheet: playerSpritesheet,
      frameCoordinates: [
        {
          x: 0,
          y: 1,
        },
      ],
    }),
    idleUp: Animation.fromSpriteSheetCoordinates({
      spriteSheet: playerSpritesheet,
      frameCoordinates: [
        {
          x: 0,
          y: 2,
        },
      ],
    }),
    walkingDown: Animation.fromSpriteSheetCoordinates({
      spriteSheet: playerSpritesheet,
      frameCoordinates: [
        {
          x: 0,
          y: 0,
        },
        {
          x: 1,
          y: 0,
        },
        {
          x: 2,
          y: 0,
        },
        {
          x: 3,
          y: 0,
        },
      ],
    }),
    walkingSides: Animation.fromSpriteSheetCoordinates({
      spriteSheet: playerSpritesheet,
      frameCoordinates: [
        {
          x: 0,
          y: 1,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 2,
          y: 1,
        },
        {
          x: 3,
          y: 1,
        },
      ],
    }),
    walkingUp: Animation.fromSpriteSheetCoordinates({
      spriteSheet: playerSpritesheet,
      frameCoordinates: [
        {
          x: 0,
          y: 2,
        },
        {
          x: 1,
          y: 2,
        },
        {
          x: 2,
          y: 2,
        },
        {
          x: 3,
          y: 2,
        },
      ],
    }),
  },
}
