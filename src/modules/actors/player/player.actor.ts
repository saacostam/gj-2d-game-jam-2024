import { Actor, Color } from "excalibur";
import { WORLD_CONFIG } from "../../config";

export class Player extends Actor {
    constructor() {
        super({
            width: WORLD_CONFIG.TILE_SIZE * 3 / 4,
            height: WORLD_CONFIG.TILE_SIZE * 3 / 4,
            color: Color.Rose,
        });
    }
}
