/* eslint-disable react/prop-types */
import styles from './Card.module.css'

function Card({price, sendUp, users, storage, title, priceMonthly, isMonthly}) {
    return (
        <div className={`${styles.card} ${title === 'Professional' ? styles.cardSpecial : ''}`}>
            <h3>{title}</h3>
            <h2><span>$</span>{isMonthly ? priceMonthly  : price }</h2>

            <p>{+storage >= 1000 ? +storage / 1000 : storage} {+storage >= 1000 ? 'TB' : 'GB'} Storage</p>
            <p>{users} Users Allowed</p>
            <p>Send up to {sendUp} GB</p>
            <button>LEARN MORE</button>
        </div>
    )
}

export default Card
