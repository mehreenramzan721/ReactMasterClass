import styles from './container.module.css'

export default function Container({childern}){
    return(
        <>
        <div className={styles.parentContainer}>
            {childern}
        </div>
            
        </>
    )
}