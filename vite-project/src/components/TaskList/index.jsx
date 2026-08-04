import { Button } from '../Button'
import { ListItem } from '../ListItem'
import './task-list.styles.css'

export function TaskList({
  className,
  allListItems,
  openMenuId,
  setOpenMenuId,
  onFocusTask,
  onDeleteTask,
  onEditTask,
}) {
  return (
    <div className={className}>
      <div className="buttons-container">
        <Button className="small-button purple-bg">
          Todas
        </Button>

        <Button className="small-button">
          Pendentes
        </Button>

        <Button className="small-button">
          Concluídas
        </Button>
      </div>

      <ul className="u-list">
        {allListItems.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            name={item.title}
            onFocus={item.onFocus}
            isMenuOpen={openMenuId === item.id}
            onToggleMenu={() => {
              setOpenMenuId((currentId) =>
                currentId === item.id ? null : item.id
              )
            }}
            onFocusTask={onFocusTask}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  )
}