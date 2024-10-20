import { Animation, Sprite } from 'excalibur'
import { playerImage, playerSpritesheet } from '../../resources'

const ANIMATION_SPEED = 1.5

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
      speed: ANIMATION_SPEED,
    }),
    idleSides: Animation.fromSpriteSheetCoordinates({
      spriteSheet: playerSpritesheet,
      frameCoordinates: [
        {
          x: 0,
          y: 1,
        },
      ],
      speed: ANIMATION_SPEED,
    }),
    idleUp: Animation.fromSpriteSheetCoordinates({
      spriteSheet: playerSpritesheet,
      frameCoordinates: [
        {
          x: 0,
          y: 2,
        },
      ],
      speed: ANIMATION_SPEED,
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
      speed: ANIMATION_SPEED,
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
      speed: ANIMATION_SPEED,
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
      speed: ANIMATION_SPEED,
    }),
  },
}
