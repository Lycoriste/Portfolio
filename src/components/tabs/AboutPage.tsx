type AboutProps = {
    current: string;
}

export const AboutPage: React.FC<AboutProps> = ({ current }) => {
    return (
        <div id='about-container' className={`${current == 'About' ? 'flex opacity-100' : 'hidden opacity-0'}`}>
            <span id='about-body'>
                <span id='about-header'>About Me</span>
                Hello! I'm Nhan (Steven) Teng, a second-year Cognitive Science major specializing in Machine Learning and Neural Computation at UCSD.
                <br />
                <br />

                Outside of my studies, I enjoy working on side projects (and picking up random skills) that integrate coding, design, and cognitive science principles. My approach is hands-on and ambitious; I’m driven to continuously expand my skills and build impactful applications. Thanks for visiting my portfolio—feel free to reach out!
                <br />
                <br />

                This site is a work in progress. I'm not actively learning web development at the moment... so this site will be laggy for a while.
            </span>
        </div>
    )
}