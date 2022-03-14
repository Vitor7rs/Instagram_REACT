export default function Posts({posts}){
    return(
        <div class="posts">
            {posts.map(post=>
                <div class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={post.userImg} />
                            {post.user}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img src={post.postImg} />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>
                        <div class="curtidas">
                            <img src={post.likesImg} />
                            <div class="texto">
                                Curtido por <strong>{post.liked}</strong> e <strong>outras {post.othersLikes} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
            
    )
}