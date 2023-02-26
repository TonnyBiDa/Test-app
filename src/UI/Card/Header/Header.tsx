import style from './Header.module.css'

const Header = (props) => {
    return (
        <div className={`${style.header} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Header
