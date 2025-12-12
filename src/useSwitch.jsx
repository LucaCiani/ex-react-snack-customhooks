import { useState, useCallback } from "react";

function useSwitch(initialValue = false) {
    const [value, setValue] = useState(initialValue);
    const toggle = useCallback(() => setValue((v) => !v), []);
    return [value, toggle];
}

export default useSwitch;
