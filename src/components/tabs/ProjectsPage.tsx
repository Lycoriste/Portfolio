type ProjectsProps = {
    current: string;
}

export const ProjectsPage: React.FC<ProjectsProps> = ({ current }) => {
    return (
        <div id='projects-content' className={`${current == 'Projects' ? 'flex opacity-100' : 'hidden opacity-0'}`}>
            <span id='projects-header'>Projects (ADDING SOON)</span>
            <div id='project-scroller'>
                <div id='chrome-extension-project' className="project-card">

                </div>
                <div id='ai-flashcard-project' className="project-card">

                </div>
                <div id='roblox-ai-project' className="project-card">

                </div>
                <div id='placeholder-project' className="project-card">

                </div>
            </div>
        </div>
    )
}