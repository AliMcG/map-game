import "./SettingsModal.css";
import useSettings from "../../hooks/useSettings";
function SettingsModal({ showModal, toggleModal }) {
    const { changeMinDistance, changeTileZoom, changeTimeLimit } =
        useSettings();
    return (
        <>
            {showModal && (
                <div className="settings-modal">
                    <form>
                        <p>Settings</p>
                        <label for="tile zoom">Tile zoom: </label>
                        <input
                            // class="input-row"
                            type="number"
                            placeholder="tile zoom"
                            min="1"
                            max="20"
                            name="tile zoom"
                            id="tile-zoom"
                        />
                        <br />
                        {/* <input
                            type="range"
                            name="tile zoom"
                            min="1"
                            max="20"
                            placeholder="tile zoom"
                        ></input><label for="tile zoom">Tile zoom(between 1 and 20):</label> */}
                        <label for="minimum guess radius">
                            Mimimum guess radius (km):
                        </label>
                        <input
                            // class="input-row"
                            type="number"
                            placeholder="minimum guess radius"
                            min="10"
                            max="1000"
                            name="minimum guess radius"
                        />
                        <br />
                        <label for="maximum time">Time limit: </label>
                        <input
                            type="time"
                            placeholder="maximum time"
                            name="maximum time"
                        />
                        <br />
                        <input
                            class="input-row"
                            type="text"
                            placeholder="some other difficulty setting..."
                        />
                        <input class="input-row" type="reset" />
                        <button class="input-row" onClick={toggleModal}>
                            Close
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
export default SettingsModal;
