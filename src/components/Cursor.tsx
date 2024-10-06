import { useEffect, useState } from "react";

export const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.x - 6, y: event.y - 6 });
        };

        document.addEventListener('mousemove', handleMouseMove)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
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