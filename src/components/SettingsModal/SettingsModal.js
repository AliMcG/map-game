import "./SettingsModal.css";
function SettingsModal({
    toggleModal,
    difficulty,
    changeMinDistance,
    changeTimeLimit,
    changeTileZoom,
}) {
    function updateMD(e) {
        changeMinDistance(e.target.value);
        console.log("MD updated: ", e.target.value);
    }
    function updateTL(e) {
        changeTimeLimit(e.target.value);
        console.log("TL updated: ", e.target.value);
    }
    function updateTZ(e) {
        changeTileZoom(e.target.value);
        console.log("TZ updated: ", e.target.value);
    }
    return (
        <>
            <div className="settings-modal">
                <form>
                    <p>Settings</p>
                    <label htmlFor="tile zoom">Tile zoom: </label>
                    <input
                        // class="input-row"
                        type="number"
                        placeholder="tile zoom"
                        min="6"
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
                        Mimimum guess radius (km):{" "}
                    </label>
                    <input
                        // class="input-row"
                        type="number"
                        placeholder="minimum guess radius"
                        min="10"
                        value={difficulty.minDistance}
                        max="1000"
                        name="minimum guess radius"
                        onChange={(e) => {
                            updateMD(e);
                        }}
                    />
                    <br />
                    <label htmlFor="maximum time">Time limit: </label>
                    <input
                        type="number"
                        placeholder="maximum time"
                        value={difficulty.timeLimit}
                        name="maximum time"
                        onChange={(e) => {
                            updateTL(e);
                        }}
                    />
                    <br />
                    <input
                        className="input-row"
                        type="text"
                        placeholder="some other difficulty setting..."
                    />
                    {/* TODO: Apply button may carry out all the changes once, instead of the state updating instantly onChange  */}
                    <button type="submit">Apply</button>
                    <input className="input-row" type="reset" />
                    <button className="input-row" onClick={toggleModal}>
                        Close
                    </button>
                </form>
            </div>
        </>
    );
}
export default SettingsModal;
