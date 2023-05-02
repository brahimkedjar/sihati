import React from 'react';
import styles from '../css/Cards.module.css';

function Cards({itemsData}) {
return (
<div className={styles.cards}>
{
itemsData.length >= 1 ? (itemsData.map((item) => {
return (
<div className={styles.card} key={item.doctorid}>
<div className={styles.imagecontainer}>
<img src={item.image_url} alt='doctor' className={styles.image}/>
</div>
<div className={styles.info}>
<h3> {item.name} </h3>
<div> {item.specialite} </div>
<div> {item.phone_number} </div>
<div> {item.baladia} </div>
<button className={styles.btn}>Voir Profile</button>
</div>
</div>
);
})) : <h1> rien </h1>
}
</div>
);
}

export default Cards;
