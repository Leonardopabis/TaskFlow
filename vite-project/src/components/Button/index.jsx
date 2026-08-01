import "./button.styles.css"

export function Button({children, ...props}) {
    return (
        <button {...props}>{children}</button>
    )
}