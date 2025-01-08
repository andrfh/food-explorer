import { useState } from 'react';
import styles from '../ItemSet/ItemSet.module.css'
import Card from './Card/Card';
import dish from '../../assets/Dish.png'

const ItemSet = ({title, setCheck}) => {

    let INITIAL_DATA = [
        {
            image: dish,
            title: 'Блюдо 1',
            subtitle: 'Ублюдо 1 очень вкусное',
            price: 100
        }, 
        {
            image: dish,
            title: 'Блюдо 2',
            subtitle: 'Ублюдо 2 не очень вкусное',
            price: 120
        },
        {
            image: dish,
            title: 'Блюдо 3',
            subtitle: 'Ублюдо 3 ну очень вкусное',
            price: 1000
        },
        {
            image: dish,
            title: 'Блюдо 4',
            subtitle: 'Ублюдо 4 вообще не вкусное',
            price: 20
        }
    ]

    let [data, setData] = useState(INITIAL_DATA);

    return(
        <div className="container">
            <div className={styles["item-set"]}>
                <h1 className={styles["item-title"]}>{title}</h1>
                <div className={styles["item-cards"]}>
                    {data.map(item => 
                        (<Card title={item.title} subtitle={item.subtitle} price={item.price} image={item.image} setCheck={setCheck}/>)
                    )}
                </div>
            </div>
        </div>
           
    )
}

export default ItemSet;