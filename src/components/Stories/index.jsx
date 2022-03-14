export default function Stories({stories}){
    return(
        <div class="stories">
            {stories.map(story =>
                <div class="story">
                    <div class="imagem">
                        <img src={story.img} />
                    </div>
                    <div class="usuario">
                        {story.user}
                    </div>
                </div>
            )}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}