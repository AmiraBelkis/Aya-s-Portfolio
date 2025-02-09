export const Menu = ({ sections }) => {
    return (
        <nav className="menu">
            {sections.map((item, index) => {
                return (
                    <MenuItem
                        key={index}
                        title={item.title}
                        link={item.link}
                    />
                )
            })}
        </nav>
    )
}
const MenuItem = ({ title, link }) => {
    return <a href={link} >{title}</a>
}