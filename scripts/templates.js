function getLossScreenTemplate(){
    return `<div id="LostGameOverlay" class="overlay_lostgame">
        <button id="playAgain" class="play_again_btn" onclick="startNewGame()">Play again</button>
    </div>`;
}

function getWonScreenTemplate(){
    return `<div class="overlay_wingame">
        <button id="playAgainWin" class="play_again_btn" onclick="startNewGame()">Play again</button>
    </div>`;
}

function getHomeScreenTemplates(){
    return `<div class="overlay_startgame" id="startGame">
        <h1>El pollo ¡LOCO!</h1>
        <div class="instructions">
            <span class="game_description">
                Help the main character, Pepe, win the battle against the chicken army and save the world from the GIANT CHICKEN.
                <br>Smaller chickens can be defeated either by jumping on them or by throwing a well-aimed bottle of fiery salsa, which you collect throw the game by touch, same as the coins. 
                <br>Save some of the bottles for the end fight. Boss chicken should be made so hot, that it turns into roast one.</span>
                <span class="emphasise">Be careful, each encounter with a chicken will cost you some of your precious lives!
            </span>

            <div class="main">
                <div class="main_left">
                    <div class="move">
                        <div class="arrow">
                            <img src="./img_pollo_locco/icons/arrow_left_icon.png" alt="arrow left">
                        </div>
                        <span>move</span>
                        <div class="arrow">
                            <img src="./img_pollo_locco/icons/arrow_right_icon.png" alt="arrow right">
                        </div>
                    </div>

                    <div class="jump">
                        <div class="spacebar">space</div>
                        <span>jump</span>
                    </div>

                    <div class="throw">
                        <div class="d">D</div>
                        <span>throw</span>
                    </div>
                </div>
            

                <div class="main_right">
                    <button id="soundBtn" class="start_screen_btn">
                        <img src="./img_pollo_locco/icons/sound_on_icon.png" alt="sound on icon">
                    </button>
                    <button id="startGameBtn" class="start_screen_btn" onclick="startNewGame()">START PLAY</button>
                </div>
        </div>

        <div class="information">
            <button class="start_screen_btn" id="legalInformations">Nutzungsbedingungen & Datenschutz</button>
            <span>© Barbora Lambeinova</span>
        </div>

        <div class="icons"></div>

    </div>`;
}

function getCanvasTemplate(){
    return `<h1>El pollo ¡LOCO!</h1>

    <canvas id="canvas" width="720" height="480">
    </canvas>  `;
}