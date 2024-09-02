/* eslint-disable react/prop-types */
import styles from './Cards.module.css'
import Card from "./Card";

function Cards({isMonthly}) {
  return (
    <div className={styles.cards}>
      <Card
        title="Basic"
        price="199.99"
        priceMonthly="19.99"
        storage="500"
        users="2"
        sendUp="3"
        isMonthly={isMonthly}
      />
      <Card
        title="Professional"
        price="249.99"
        priceMonthly="24.99"
        storage="1000"
        users="5"
        sendUp="10"
        isMonthly={isMonthly}
      />
      <Card
        title="Master"
        price="399.99"
        priceMonthly="39.99"
        storage="2000"
        users="10"
        sendUp="20"
        isMonthly={isMonthly}
      />
    </div>
  );
}

export default Cards;
