// create controller
// register with router
// draw players
// -- get players from AppState
// -- iterate getting names
// -- inject to pages

import { AppState } from "../AppState.js";

export class PlayersController {
    constructor() {
        console.log(AppState.players)

        this.drawPlayers()
    }

    drawPlayers() {
        let content = ''

        AppState.players.forEach(player => {
            content += player.PlayerTemplateCard
        })
        document.getElementById('players').innerHTML = content
    }
}