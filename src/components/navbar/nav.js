export default function NavbarElement({ children, ...props }) {
    return (
        <div className={"bg-slate-600 sticky top-0 h-16 p-4" + props.className}>{children}</div>
    )
}