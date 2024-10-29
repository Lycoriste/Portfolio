type AboutProps = {
    current: string;
}

export const AboutPage: React.FC<AboutProps> = ({ current }) => {
    return (
        <div id='about-content' className={`${current == 'About' ? 'flex' : 'hidden'}`}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat turpis enim nam elementum litora donec arcu odio amet. Feugiat penatibus lectus venenatis eros vulputate vulputate a. Nascetur litora laoreet vivamus vel accumsan. Suspendisse porta odio suscipit leo sem primis magnis purus. Dignissim sed ut nostra tristique arcu urna suscipit nisi. Nisi torquent fermentum ipsum parturient platea fusce condimentum. Morbi magnis facilisi molestie dignissim faucibus dui taciti.

            Nibh placerat habitasse nibh fames consectetur vehicula. Fames dapibus mollis per hac sodales felis. Sapien eleifend odio dictumst dis fusce natoque, id nec litora. Phasellus dui ut libero consectetur faucibus ligula. Malesuada sollicitudin condimentum proin a posuere fermentum suspendisse consectetur ad. Risus iaculis mattis rutrum magna ultrices posuere. Senectus fusce tempor risus class morbi. Integer aptent dictum scelerisque nulla diam lacus curae laoreet. Nibh volutpat nunc varius potenti taciti justo.

            Ligula praesent dignissim venenatis ac euismod nascetur faucibus aliquet. Faucibus leo quis phasellus turpis consectetur ullamcorper curae commodo. Fermentum tristique cubilia interdum rhoncus euismod nibh libero. Purus rhoncus varius sollicitudin ridiculus urna ac. Placerat arcu luctus pulvinar pulvinar hendrerit conubia nunc duis. Hac id praesent pellentesque per; neque ad id. Massa venenatis luctus posuere lacinia maximus congue. Facilisi parturient netus vel integer nec primis urna. Libero senectus vivamus mi placerat malesuada blandit odio nulla.

            Hac aliquet volutpat ex fames rutrum torquent sit egestas? Dis hac primis sollicitudin proin ridiculus. Habitasse convallis pharetra senectus varius lacus aptent nam venenatis. Leo eleifend integer odio ex hendrerit platea nisi. Sapien elementum risus magnis adipiscing mauris. Facilisis vestibulum dis risus quam diam ac curae elementum. Blandit viverra ipsum vivamus; taciti nec convallis ultricies. Cubilia pellentesque quam et non porttitor imperdiet. Elit molestie duis suscipit pretium per sapien.

            Vitae nunc tincidunt quis himenaeos lacinia felis porta vulputate rhoncus. Feugiat ut curae tincidunt lacus enim mus. Massa lacus nam iaculis nascetur bibendum turpis viverra lectus dapibus. Est curabitur venenatis ridiculus ornare molestie morbi taciti. Sociosqu class luctus urna aptent finibus. Scelerisque leo ultricies tincidunt metus enim vivamus convallis neque dapibus. Maximus egestas posuere elit ultricies vestibulum porta etiam curabitur. Ridiculus habitasse mattis proin dapibus mollis eleifend inceptos facilisis. Praesent ac dapibus commodo enim potenti ullamcorper amet.
        </div>
    )
}