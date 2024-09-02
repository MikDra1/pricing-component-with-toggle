/* eslint-disable react/prop-types */
import styles from './ToggleButton.module.css'

function ToggleButton({isMonthly, setIsMonthly}) {
    
    return ( 
    <div className={styles.toggleContainer}>
        <p>Annually</p>
    <div className={styles.toggleButtonCover}>
          <div  className={styles.button} id={styles.button6}>
            <input onClick={() => setIsMonthly(!isMonthly)} type="checkbox" className={styles.checkbox} />
            <div className={styles.knobs}></div>
            <div className={styles.layer}></div>
          </div>
      </div>
      <p>Monthly</p>
      </div>
    )
}

export default ToggleButton
