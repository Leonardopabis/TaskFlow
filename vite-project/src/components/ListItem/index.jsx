import './list-item.styles.css'

export function ListItem({name, onFocus}) {
    const imagem = onFocus ? "./src/assets/onFocusImage.png" : "./src/assets/clockImage.png"
    let conteudoOnFocus = null
    if (onFocus) {
        console.log("A tarefa está em foco")
        conteudoOnFocus = (
            <div className='on-focus-container'>
                <p>Em foco</p>
            </div>
        )
    }

    return (
        <li className='list-item'>
            <div className="left-container">
                <input type="checkbox" />
                <div className="text">
                    <h2>{name}</h2>
                    {conteudoOnFocus}
                </div>
            </div>
            <div className="right-container">
                <img src={imagem} alt="" className='onFocusImg'/>
                <button className='dotsMenuButton'><img src="./src/assets/dotsMenu.png" alt="" className='dotsMenuImg'/></button>
            </div>
        </li>
    )
}