import NavBar from "./components/NavBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import Usuario from "./components/Usuario";
import Sugestoes from "./components/Sugestoes";
import Links from "./components/links";
import Copyrigth from "./components/Copyrigth" ;
import { user, stories, posts, sugestoes} from "./data/data";

export default function App() {
    
    return (
        <>
            <NavBar />
            <div class="corpo">
                <div class="esquerda">
                    <Stories stories={stories} />
                    <Posts posts={posts} />
                </div>
                <div class="sidebar">
                    <Usuario user={user}/>
                    <Sugestoes sugestoes={sugestoes}/>
                    <Links />
                    <Copyrigth />
                </div>
            </div>
            <div class="fundo-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </>
    );
}