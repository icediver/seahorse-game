import { Game } from "../Game";
import { getImagePath } from "../utils/getImagePath";
import { Explosion } from "./Explosion";

export class SmokeExplosion extends Explosion {
  constructor(game: Game, x: number, y: number) {
    super(game, x, y);
    this.image.src = getImagePath("explosions/smokeExplosion.png");
  }
}
