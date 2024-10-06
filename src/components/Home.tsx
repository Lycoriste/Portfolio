type HomeProps = {
    current: string;
    set: React.Dispatch<React.SetStateAction<string>>;
}

export const Home: React.FC<HomeProps> = ({ current, set }) => {
    return (
        <button
            id='home'
            className="tabs-button-styling"
            onClick={() => {
                if (current !== 'Home') {
                    set('Home');
                    console.log(current);
                } else {
                    console.log('Invalid');
                }
            }}>
            Home
        </button>
    );
}