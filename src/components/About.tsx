type AboutProps = {
    current: string;
    set: React.Dispatch<React.SetStateAction<string>>;
}

export const About: React.FC<AboutProps> = ({ current, set }) => {
    return (
        <button
            id='about'
            className="tabs-button-styling"
            onClick={() => {
                if (current !== 'About') {
                    set('About');
                    console.log(current);
                } else {
                    console.log('Invalid');
                }
            }}>
            About
        </button>
    );
}