type Template = {
    projectName: string;
}

export const ProjectTemplate: React.FC<Template> = ({ projectName }) => {
    let title: string | undefined;
    let description: string | undefined;

    let github: string | undefined;
    let imgURL: string | undefined;

    let deployment: string | undefined;

    switch (projectName) {
        case 'chrome-extension-project': {
            title = 'AI Powered Chrome Extension';
            github = 'https://github.com/cnrbd/chrome_extension';
            description = "This extension was made with the goal of addressing transparency in our food's nutritional information. Made using a RAG pipeline to prompt OpenAI's GPT model using information about food recipes gathered by a webscraper.";
            imgURL = 'https://lh3.googleusercontent.com/XprMjci9p4F2xblIzActM6IxPF6_UN-BJEUf1PByI5NZI3nHX-X0SoQQCM6p9vkJxKbnXds-2UUq4W8FHJRDZcyIPqI=s1280-w1280-h800';
            deployment = 'https://chromewebstore.google.com/detail/calocal/ilofgkmdaajnkbbgogakoodnojpfnogk?authuser=0&hl=en;'
            break;
        }
        // case 'roblox-ai-project': {
        //     title = 'Roblox AI';
        //     github = 'https://github.com/Lycoriste/RBXWebserver';
        //     description = "Project in development. Designing Roblox NPC behavior trees by extracting reinforcement learned policies for performance.";
        //     imgURL = '/img/projectimg/rbxwebserverproject.png';
        //     break;
        // }
        case 'anime-similarity-search': {
            title = 'Anime Similarity Search';
            github = 'https://github.com/Lycoriste/AnimeSimilaritySearch';
            description = "Finds similar anime based on descriptions and reviews using sentence transformers.\nDevpost: https://devpost.com/software/anime-similarity-search"
            imgURL = 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/364/289/datas/original.png'
        }
        default: {
            break;
        }
    }

    return (
        <div id={projectName} className="project-card">
            <div className='flex flex-row justify-between'>
                <h1 aria-label={title} className="project-title">{title}</h1>
                <a href={github} target="_blank" rel="noopener noreferrer" className="github-button">
                    <img src='/img/projectimg/githubicon.png' />
                </a>
            </div>
            <img src={imgURL} alt="Project image" className="project-image" />
            <p dangerouslySetInnerHTML={{ __html: description!.replace(/\n/g, '<br />') }} />
            <a href={deployment} target="_blank" rel="noopener noreferrer" className={`self-end underline mt-2 ${deployment == undefined ? "text-yellow-300" : 'hover:text-blue-300'} `}>{deployment == undefined ? "Work in progress" : "View project"}</a>
        </div >
    )
}
