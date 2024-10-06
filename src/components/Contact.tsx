type ContactProps = {
    current: string;
    set: React.Dispatch<React.SetStateAction<string>>;
}


export const Contact: React.FC<ContactProps> = ({ current, set }) => {
    return (
        <button
            id='contact'
            className="tabs-button-styling"
            onClick={() => {
                if (current !== 'Contact') {
                    set('Contact');
                    console.log(current);
                } else {
                    console.log('Invalid');
                }
            }}>
            Contact
        </button>
    );
}