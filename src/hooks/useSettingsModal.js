import { useState } from "react";

function useSettingsModal() {
    const [showModal, setShowModal] = useState(false);

    function toggleModal() {
        console.log("modal toggled: ", showModal);
        
        setShowModal(!showModal);
    }

    return { showModal, toggleModal };
}
export default useSettingsModal;
