import ButtonFunction from '../../common/ButtonFunction/ButtonFunction';
import styles from './PaperButtons.module.scss';

const PaperButtons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonFunction}>
        <h2>
          Zadania
        </h2>
        <ButtonFunction name='Dodaj papier'/>
      </div>
    </div>
  )
}

export default PaperButtons;