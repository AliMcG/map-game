import useSettingsModal from "../../hooks/useSettingsModal";
import "./SettingsModal.css";
function SettingsModal({ showModal, toggleModal }) {
    // const { toggleModal } = useSettingsModal();
    return (
        <>
            {showModal && (
                <div className="settings-modal">
                    <form>
                        <p>Settings</p>
                        <input
                            type="number"
                            placeholder="tile zoom"
                            min="1"
                            max="20"
                        />
                        <input
                            type="number"
                            placeholder="minimum guess radius"
                            min="10"
                            max="1000"
                        />
                        <input type="time" placeholder="maximum time" />
                        <input
                            type="text"
                            placeholder="some other difficulty setting..."
                        />
                        <button onClick={toggleModal}>Close</button>
                        <input type="reset" />
                    </form>
                </div>
            )}
        </>
    );
}
export default SettingsModal;
