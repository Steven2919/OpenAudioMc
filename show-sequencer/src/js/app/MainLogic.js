import {setPageOverlay} from "../ui/Overlay";
import {CueueElement} from "../components/editor/CueueElement";

export class MainLogic {

    constructor(data) {
        this.player = {
            name: data.playerName,
            uuid: data.playerUuid
        }

        console.log(data)

        this.show = data.show;
        this.session = data.session;

        document.getElementById("player-name").innerText = this.player.name;
        document.getElementById("show-name").innerText = this.show.showName;
        this.updateSaveTime();
        this.updateCount();
        setPageOverlay(null)
        this.renderCompleteTable();
    }

    updateSaveTime() {
        function checkTime(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        // add a zero in front of numbers<10
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('saved').innerHTML = h + ":" + m + ":" + s;
    }

    updateCount() {
        document.getElementById("cueue-count").innerText = this.show.cueList.length;
    }

    renderCompleteTable() {
        // clear
        document.getElementById("show-cue-list").innerHTML = "";
        for (const element of this.show.cueList) {
            console.log(element)
            new CueueElement(element).insertIntoPage();
        }
    }

}