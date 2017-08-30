import {Component} from "@angular/core";
import {Game} from "../../game/game.model";
import {GameService} from "../../game/game.service";

@Component({
  selector: 'AddGameComponent',
  templateUrl: './addgame.component.html',
})
export class AddGameComponent{
  game: Game;

  constructor(private gameService: GameService) {
  }

  onAddGame() {
    this.gameService.addGame(this.game.name, this.game.description, this.game.votes,
      this.game.cover, this.game.version, this.game.rating,
      this.game.release_date, this.game.size, this.game.price);
  }
}
