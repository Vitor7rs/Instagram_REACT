import NavBar from "./components/NavBar"
import Stories from "./components/Stories"
import Posts from "./components/Posts"
import Usuario from "./components/Usuario"
import Sugestoes from "./components/Sugestoes"
import Links from "./components/links"
import Copyrigth from "./components/Copyrigth"

export default function App() {
    
    const user = {
        nameId: "catanacomics",
        name: "Catana",
        img: "/assets/img/catanacomics.svg"
    }

    const stories = [
        {
            user:"9gag",
            img: "assets/img/9gag.svg"
        },
        {
            user: "meowed",
            img: "assets/img/meowed.svg"
        },
        {
            user: "barked",
            img: "assets/img/barked.svg"
        },
        {
            user: "nathanwpylestrangeplanet",
            img: "assets/img/nathanwpylestrangeplanet.svg"
        },
        {
            user: "wawawicomics",
            img: "assets/img/wawawicomics.svg"
        },
        {
            user: "respondeai",
            img: "assets/img/respondeai.svg"
        },
        {
            user: "filomoderna",
            img: "assets/img/filomoderna.svg"
        },
        {
            user: "memeriagourmet",
            img: "assets/img/memeriagourmet.svg"
        },
    ];

    const posts = [
        {
            userImg: "assets/img/meowed.svg",
            user: "meowed",
            postImg: "assets/img/gato-telefone.svg",
            likesImg: "assets/img/respondeai.svg",
            liked: "respondeai",
            othersLikes: "101.523"
        },
        {
            userImg: "assets/img/barked.svg",
            user: "barked",
            postImg: "assets/img/dog.svg",
            likesImg: "assets/img/adorable_animals.svg",
            liked: "adorable_animals",
            othersLikes: "99.159"
        }
    ];

    const sugestoes = [
        {
            userImg: "assets/img/bad.vibes.memes.svg",
            user: "bad.vibes.memes",
            userStatus: "Segue você"
        },
        {
            userImg: "assets/img/chibirdart.svg",
            user: "chibirdart",
            userStatus: "Segue você"
        },
        {
            userImg: "assets/img/razoesparaacreditar.svg",
            user: "razoesparaacreditar",
            userStatus: "Novo no Instagram"
        },
        {
            userImg: "assets/img/adorable_animals.svg",
            user: "adorable_animals",
            userStatus: "Segue você"
        },
        {
            userImg: "assets/img/smallcutecats.svg",
            user: "smallcutecats",
            userStatus: "Segue você"
        }
    ];

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
                    <Sugestoes />
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
    )
}