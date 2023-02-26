import style from './PageContainer.module.css'

const PageContainer = (props) => {
    return (
        <div className={`${style.container} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default PageContainer
