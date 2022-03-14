export default function Sugestoes({sugestoes}){
return(
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map(sugestao =>
                <div class="sugestao">
                    <div class="usuario">
                        <img src={sugestao.userImg} />
                        <div class="texto">
                            <div class="nome">{sugestao.user}</div>
                            <div class="razao">{sugestao.userStatus}</div>
                        </div>
                    </div>
                    <div class="seguir">Seguir</div>
                </div>
            )}
        </div>
    )
}