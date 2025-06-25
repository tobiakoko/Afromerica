import { useState }from "react";

export const useToggleState = (initialState = false) => {
    const [isOn, setIsOn] = useState(initialState);

    const handleToggle = () => setIsOn((prev) => !prev);
    const handleOff = () => setIsOn(false);
    const handleOn = () => setIsOn(true); 

    return {isOn, handleToggle, handleOff, handleOn };
}