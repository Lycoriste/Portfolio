type ContactProps = {
    current: string;
    set: React.Dispatch<React.SetStateAction<string>>;
}


export const Exit: React.FC<ContactProps> = ({ current, set }) => {
    return (
        <button
            id='exit'
            className={`${current == 'Home' ? 'hidden' : 'flex'} exit-styling`}
            onClick={() => {
                if (current !== 'Home') {
                    set('Home');
                    console.log(current);
                } else {
                    console.log('Invalid');
                }
            }}>
            ← Return to home
        </button>
    );
}