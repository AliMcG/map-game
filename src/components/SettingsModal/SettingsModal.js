import "./SettingsModal.css";
function SettingsModal({
    toggleModal,
    difficulty,
    changeMaxGuesses,
    changeMinDistance,
    changeTimeLimit,
    changeTileZoom,
}) {
    return (
        <>
            <div className="settings-modal">
                <form>
                    <p>Settings</p>
                    <div className="input-row">
                        <label htmlFor="tile zoom">Tile zoom: </label>
                        <input
                            className="input-field"
                            type="number"
                            placeholder="tile zoom"
                            min="6"
                            value={difficulty.tileZoom}
                            max="10"
                            name="tile zoom"
                            id="tile-zoom"
                            onChange={(e) => {
                                changeTileZoom(e.target.value);
                            }}
                        />
                    </div>
                    <div className="input-row">
                        <label htmlFor="minimum guess radius">
                            Mimimum guess radius (km):{" "}
                        </label>
                        <input
                            className="input-field"
                            type="number"
                            placeholder="minimum guess radius"
                            min="10"
                            value={difficulty.minDistance}
                            max="1000"
                            name="minimum guess radius"
                            onChange={(e) => {
                                changeMinDistance(e.target.value);
                            }}
                        />
                    </div>
                    <div className="input-row">
                        <label htmlFor="maximum time">Time limit: </label>
                        <input
                            className="input-field"
                            type="number"
                            placeholder="maximum time"
                            name="maximum time"
                            value={difficulty.timeLimit}
                            onChange={(e) => {
                                changeTimeLimit(e.target.value);
                            }}
                        />
                    </div>
                    <div className="input-row">
                        <label htmlFor="max guesses">
                            Maximum no. of guesses:{" "}
                        </label>
                        <input
                            className="input-field"
                            type="number"
                            placeholder="maximum no. of guesses"
                            name="max guesses"
                            min="1"
                            value={difficulty.maxGuesses}
                            onChange={(e) => {
                                changeMaxGuesses(e.target.value);
                            }}
                        />
                    </div>
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
