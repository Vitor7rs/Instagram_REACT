export default function Usuario({user}){
    return(
        <div class="usuario">
            <img src={user.img} />
            <div class="texto">
                <strong>{user.nameId}</strong>
                {user.name}
            </div>
        </div>
    )
}