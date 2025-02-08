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
            <button class="start_screen_btn" id="legalInformations" onclick="getLegalInformationOverlay()">Nutzungsbedingungen & Datenschutz</button>
            
            <button class="start_screen_btn" id="impressum" onclick="getImpressumOverlay()">Impressum</button>
        </div>

        <div class="icons"></div>
    </div>
    <div class="control_icons">
        <button class="icon_button">
            <img src="./img_pollo_locco/icons/sound_on_icon.png" alt="sound on icon">
        </button>
        <button class="icon_button" onclick="getHomeScreen()">
            <img src="./img_pollo_locco/icons/homescreen_icon.png" alt="homescreen icon">
        </button>
        <button class="icon_button">
            <img src="./img_pollo_locco/icons/fullscreen_icon.png" alt="full screen modus icon">
        </button>
    </div>`;
}

function getCanvasTemplate(){
    return `<h1>El pollo ¡LOCO!</h1>

    <canvas id="canvas" width="720" height="480">
    </canvas>  
    <div class="control_icons">
        <button class="icon_button">
            <img src="./img_pollo_locco/icons/sound_on_icon.png" alt="sound on icon">
        </button>
        <button class="icon_button" onclick="getHomeScreen()">
            <img src="./img_pollo_locco/icons/homescreen_icon.png" alt="homescreen icon">
        </button>
        <button class="icon_button">
            <img src="./img_pollo_locco/icons/fullscreen_icon.png" alt="full screen modus icon">
        </button>
    </div>`;
}

function getImpressumTemplates() {
    return `<div class="impressum_overlay">
    Impressum

Angaben gemäß § 5 TMG (Telemediengesetz)

Betreiber des Spiels:
Barbora Lambeinova
Marktplatz 12
86650 Wemding
Deutschland

Kontakt:
E-Mail: lambeinovab@seznam.cz

Haftungsausschluss:
Die Inhalte dieses Spiels wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als Betreiber des Spiels bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte verantwortlich. Für Inhalte von externen Links übernehme ich keine Haftung, da ich keinen Einfluss auf die Gestaltung und Inhalte der verlinkten Seiten habe.

Urheberrecht:
Die Inhalte und Werke in diesem Spiel unterliegen dem deutschen Urheberrecht. Vervielfältigung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der Zustimmung des jeweiligen Autors.
</div>`;
}

function getLegalInformationTemplates() {
    return `<div class="legalInformation_overlay">
    **Nutzungsbedingungen für „El Pollo Loco“**

Ein run - and - jump Spiel aus dem Hause Developer Akademie Bootcamp

Einleitung

Willkommen zu El Pollo Loco! Diese Nutzungsbedingungen regeln die Nutzung des genannten Spiels für den privaten Gebrauch. Durch die Nutzung des Spiels erklärst du dich mit diesen Bedingungen einverstanden.

2. Lizenz zur Nutzung

Du erhältst eine nicht-exklusive, nicht übertragbare Lizenz zur Nutzung des Spiels ausschließlich für den privaten Gebrauch. Jegliche kommerzielle Nutzung, Weiterverbreitung oder Vervielfältigung des Spiels ist untersagt.

3. Geistiges Eigentum

Alle Rechte am Spiel, einschließlich aller Grafiken, Sounds und Codes, gehören dem Entwickler. Du bist nicht berechtigt, das Spiel zu ändern, zu dekompilieren oder in den Quellcode einzugreifen.

4. Haftungsausschluss

Das Spiel wird "wie besehen" bereitgestellt. Die Entwicklerin übernimmt keine Haftung für Fehler oder Schäden, die durch die Nutzung des Spiels entstehen könnten.

5. Datenschutz

Dieses Spiel sammelt keine personenbezogenen Daten, es sei denn, dies wird ausdrücklich in der Datenschutzerklärung weiter unten angegeben.

6. Beendigung der Nutzung

Die Entwicklerin behält sich das Recht vor, die Lizenz zur Nutzung des Spiels jederzeit zu beenden, falls du gegen diese Nutzungsbedingungen verstößt.

7. Änderungen der Nutzungsbedingungen

Die Entwicklerin kann diese Nutzungsbedingungen jederzeit ändern. Änderungen werden durch Veröffentlichung im Spiel bekannt gegeben.

8. Geltendes Recht

Diese Nutzungsbedingungen unterliegen dem Recht von Bundesrepublik Deutschland. Für Streitigkeiten aus der Nutzung dieses Spiels ist das zuständige Amtsgericht zuständig.

9. Kontakt

Bei Fragen oder Anmerkungen zu diesen Nutzungsbedingungen kannst du die Entwicklerin unter lambeinovab@seznam.cz erreichen.


Datenschutzerklärung für „El Pollo Loco“
Ich, die Entwicklerin von „El Pollo Loco“ (weiter einfach als „Spiel“ genannt), nehme den Schutz deiner privaten Daten sehr ernst. Diese Datenschutzerklärung erklärt dir, wie ich mit deinen personenbezogenen Daten umgehe, wenn du das Spiel nutzt. Da ich keine personenbezogenen Daten sammle oder speichere, möchte ich dir transparent darlegen, wie ich deine Privatsphäre schütze.
1. Allgemeine Informationen
Der Schutz deiner Privatsphäre ist mir wichtig. Diese Datenschutzerklärung gilt für die Nutzung des Spiels, das ausschließlich für den privaten Gebrauch bestimmt ist. Durch die Nutzung des Spiels erklärst du dich mit dieser Datenschutzerklärung einverstanden.
2. Keine Erhebung personenbezogener Daten
Ich erhebe, speichere oder verarbeite keine personenbezogenen Daten. Das Spiel sammelt keine Informationen wie deinen Namen, deine E-Mail-Adresse oder andere Identifikatoren. Du kannst das Spiel ganz ohne die Eingabe persönlicher Daten nutzen.
3. Automatische Datenverarbeitung (Log-Dateien)
Das Spiel speichert keine Nutzerdaten oder Logs. Es werden keine Informationen über deine Spielgewohnheiten oder Interaktionen im Spiel erfasst. Deine Spielerdaten werden also nicht aufgezeichnet.
4. Verwendung von Drittanbieter-Diensten
Da das Spiel keine personenbezogenen Daten erhebt, gebe ich keinerlei Daten an Dritte weiter. Das Spiel ist nicht mit externen Servern, Werbenetzwerken oder Analyse-Diensten verbunden. Deine Daten bleiben bei dir.
5. Cookies
Ich verwende keine externen Dienste, die Cookies auf deinem Gerät setzen. Das bedeutet, dass keine Cookies verwendet werden, um Nutzerdaten zu speichern. Es werden keine dauerhaften Informationen auf deinem Gerät gespeichert.
6. Sicherheit
Da keine personenbezogenen Daten erhoben oder gespeichert werden, bestehen keine spezifischen Sicherheitsrisiken in Bezug auf deine Daten. Das Spiel überträgt keine Daten über das Internet und schützt somit deine Privatsphäre.
7. Änderungen der Datenschutzerklärung
Ich behalte mir das Recht vor, diese Datenschutzerklärung jederzeit zu ändern. Sollte sich etwas an der Art und Weise ändern, wie ich mit deinen Daten umgehe, werde ich dies durch eine Veröffentlichung im Spiel oder auf der offiziellen Webseite bekanntgeben. Bitte überprüfe regelmäßig diese Erklärung, um über etwaige Änderungen informiert zu sein.
8. Kontakt
Falls du Fragen zu dieser Datenschutzerklärung hast oder weitere Informationen benötigst, kannst du mich jederzeit unter lambeinovab@seznam.cz kontaktieren.
9. Geltendes Recht
Diese Datenschutzerklärung unterliegt dem Recht von Deutschland. Für alle Streitigkeiten, die im Zusammenhang mit dieser Datenschutzerklärung auftreten könnten, ist das zuständige Gericht am Wohnort der Entwicklerin zuständig.
Datum der letzten Aktualisierung: 30.1.2025

</div>`;
}