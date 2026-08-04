import { useState } from 'react'
import './list-item.styles.css'

export function ListItem({
  id,
  name,
  onFocus,
  isMenuOpen,
  onToggleMenu,
  onFocusTask,
  onEditTask,
  onDeleteTask,
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState(name)

  const imagem = onFocus
    ? './src/assets/onFocusImage.png'
    : './src/assets/clockImage.png'

  function handleStartEditing() {
    setEditedName(name)
    setIsEditing(true)
    onToggleMenu()
  }

  function handleSubmitEdit(event) {
    event.preventDefault()

    const formattedName = editedName.trim()

    if (!formattedName) {
      return
    }

    onEditTask(id, formattedName)
    setIsEditing(false)
  }

  function handleCancelEdit() {
    setEditedName(name)
    setIsEditing(false)
  }

  return (
    <li className="list-item">
      <div className="left-container">
        <input type="checkbox" />

        <div className="text">
          {isEditing ? (
            <form
              className="edit-task-form"
              onSubmit={handleSubmitEdit}
            >
              <input
                type="text"
                className="edit-task-input"
                value={editedName}
                onChange={(event) =>
                  setEditedName(event.target.value)
                }
                autoFocus
              />

              <button
                type="submit"
                className="save-edit-button"
              >
                Salvar
              </button>

              <button
                type="button"
                className="cancel-edit-button"
                onClick={handleCancelEdit}
              >
                Cancelar
              </button>
            </form>
          ) : (
            <>
              <h2>{name}</h2>

              {onFocus && (
                <div className="on-focus-container">
                  <p>Em foco</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className="right-container">
        <img
          src={imagem}
          alt={onFocus ? 'Tarefa em foco' : 'Tarefa pendente'}
          className="onFocusImg"
        />

        <div className="dots-menu-container">
          <button
            type="button"
            className="dotsMenuButton"
            onClick={onToggleMenu}
            aria-label={`Abrir opções de ${name}`}
          >
            <img
              src="./src/assets/dotsMenu.png"
              alt=""
              className="dotsMenuImg"
            />
          </button>

          {isMenuOpen && (
            <div className="task-options-menu">
              <button
                type="button"
                onClick={() => onFocusTask(id)}
              >
                Focar
              </button>

              <button
                type="button"
                onClick={handleStartEditing}
              >
                Editar
              </button>

              <button
                type="button"
                className="delete-option"
                onClick={() => onDeleteTask(id)}
              >
                Deletar
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}