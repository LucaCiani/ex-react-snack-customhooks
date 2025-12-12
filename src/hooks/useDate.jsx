import { useEffect, useState } from "react";

export default function useDate() {
    const [currentDate, setCurrentDate] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            const d = new Date();
            const text = d.toLocaleString("it-IT");
            setCurrentDate(text);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return currentDate;
}
