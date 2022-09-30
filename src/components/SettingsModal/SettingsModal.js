import useSettingsModal from "../../hooks/useSettingsModal";
import "./SettingsModal.css";
function SettingsModal() {
    const { toggleModal } = useSettingsModal();
    return (
        <div className="settings-modal">
            <p>Settings</p>
            <input type="number" placeholder="tile zoom"></input>
            <input type="text" placeholder="correct radius"></input>{" "}
            <button onClick={toggleModal}>Close</button>
        </div>
    );
}
export default SettingsModal;
