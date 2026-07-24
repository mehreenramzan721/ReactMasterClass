import styles from './foodItem.module.css'

export default function FoodItem({food}){
    return(
        <>
        <div className={styles.itemContainer}>
            <img className={styles.itemImage}
            src={food.imaage} alt="" />
            <div className={styles.itemContent}>
            <p className={styles.itemName}>{food.title}</p>
            </div>
            <h1>{food.title}</h1>
            <div className={styles.buttonContainer}><button className={styles.itemButton}
            >View Recipe</button></div>
            
        </div>
        </>
    )
}