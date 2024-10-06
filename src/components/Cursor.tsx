import { useEffect, useRef, useState } from "react";

export const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => { setPosition({ x: event.x - 6, y: event.y - 6 }), 100 });
        }

        document.addEventListener('mousemove', handleMouseMove)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div className="cursor-styling"
            style={{
                top: position.y,
                left: position.x
            }} />
    );
}

