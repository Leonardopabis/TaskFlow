import { Button } from '../Button'
import { ListItem } from '../ListItem'
import './task-list.styles.css'

export function TaskList(props) {
    return (
        <div {...props}>
            <div className="buttons-container">
                <Button className="small-button purple-bg">Todas</Button>
                <Button className="small-button">Pendentes</Button>
                <Button className="small-button">Concluídas</Button>
            </div>
            <ul className='u-list'>
                <ListItem/>
            </ul>
        </div>
    )
}