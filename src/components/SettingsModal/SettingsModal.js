import "./SettingsModal.css";
// import useSettings from "../../hooks/useSettings";
function SettingsModal({ showModal, toggleModal, changeTileZoom, difficulty }) {
    // const { changeMinDistance, changeTileZoom, changeTimeLimit,difficulty } =
    //     useSettings();
    function updateTZ(e) {
        changeTileZoom(e.target.value);
        console.log("TZ updated: ", e.target.value);
    }
    return (
        <>
            {showModal && (
                <div className="settings-modal">
                    <form>
                        <p>Settings</p>
                        <label htmlFor="tile zoom">Tile zoom: </label>
                        <input
                            // class="input-row"
                            type="number"
                            placeholder="tile zoom"
                            min="5"
                            value={difficulty.tileZoom}
                            max="10"
                            name="tile zoom"
                            id="tile-zoom"
                            onChange={(e) => {
                                updateTZ(e);
                            }}
                        />
                        <br />
                        {/* <input
                            type="range"
                            name="tile zoom"
                            min="1"
                            max="20"
                            placeholder="tile zoom"
                        ></input><label for="tile zoom">Tile zoom(between 1 and 20):</label> */}
                        <label htmlFor="minimum guess radius">
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
                        <label htmlFor="maximum time">Time limit: </label>
                        <input
                            type="time"
                            placeholder="maximum time"
                            name="maximum time"
                        />
                        <br />
                        <input
                            className="input-row"
                            type="text"
                            placeholder="some other difficulty setting..."
                        />
                        <input className="input-row" type="reset" />
                        <button className="input-row" onClick={toggleModal}>
                            Close
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
export default SettingsModal;
