import { useEffect, useRef, useState } from "react";

export default function useCustomPointer(pointerContent) {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const pointerRef = useRef(null);

    useEffect(() => {
        document.body.style.cursor = "none";

        const handleMouseMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.body.style.cursor = "";
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const style = {
        position: "fixed",
        left: pos.x,
        top: pos.y,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        fontSize: 32,
        userSelect: "none",
    };

    return (
        <span ref={pointerRef} style={style}>
            {pointerContent}
        </span>
    );
}
