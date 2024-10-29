import { useEffect } from 'react'

export const displayTab = (current) => {
    const exitButton = document.querySelector('#exit');
    const aboutTab = document.querySelector('#about-content');
    useEffect(() => {
        exitButton.addEventListener("click", () => {
            console.log(current);
        })
    }, [])
}