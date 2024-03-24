import { useState } from "react"

const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        try {
            const value = localStorage.getItem(key);

            // check if the local storage already has any values,
            // otherwise initialize it with the passed initialValue
            return value ? JSON.parse(value) : initialValue;
        } catch (err) {
            console.log("[SERVER]: ", err.message);
        }
    })

    const setValue = (value) => {
        try {
            // if the passed value is a callback function,
            // then call it with the existing state.
            const valueToStore = value instanceof Function ? value(state) : value;

            localStorage.setItem(key, JSON.stringify(valueToStore));
            setState(value);
        } catch (err) {
            console.log("[SERVER]: ", err.message);
        }
    }

    return [state, setValue];
}

export default useLocalStorage;
