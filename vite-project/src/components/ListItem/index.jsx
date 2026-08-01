import './list-item.styles.css'

export function ListItem() {
    return (
        <li className='list-item'>
            <div className="left-container">
                <input type="checkbox" />
                <div className="text">
                    <h2>Estudar react hooks</h2>
                    <div>Em foco</div>
                </div>
            </div>
            <div className="right-container">
                <img src="./src/assets/onFocusImage.png" alt="" className='onFocusImg'/>
                <button className='dotsMenuButton'><img src="./src/assets/dotsMenu.png" alt="" className='dotsMenuImg'/></button>
            </div>
        </li>
    )
}