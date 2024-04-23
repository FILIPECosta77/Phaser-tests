import { Scene } from "phaser";

export class Game extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  msg_text: Phaser.GameObjects.Text;

  constructor() {
    super("Game");
  }

  create() {
    this.camera = this.cameras.main;
    this.background = this.add.image(450, 256, "background");

    const map = this.make.tilemap({ key: "map" });
    // @ts-ignore
    const renderTiles: Phaser.Tilemaps.Tileset = map!.addTilesetImage(
      "Tiled",
      "tiles"
    );

    const showMapBorder = map.createLayer("Border", renderTiles, 0, 0);
    const showMapMain = map.createLayer("main", renderTiles, 0, 0);
  }
}
