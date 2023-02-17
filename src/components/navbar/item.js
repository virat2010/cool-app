export default function NavItem({ children, ...props }) {
    return (
        <div className={"border p-2 text-center rounded-xl" + props.className}>{children}</div>
    )
}