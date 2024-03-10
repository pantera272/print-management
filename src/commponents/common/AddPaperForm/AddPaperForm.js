import styles from './AddPaperForm.module.scss';
import ButtonFunction from './../ButtonFunction/ButtonFunction';

const AddPaperForm = () => {
  return (
    <div className={styles.form}>
        <h2>Dodaj papier</h2>
        <div className={styles.input}>
          <label>Nazwa</label>
          <input type='text' />
        </div>
        <div className={styles.input}>
          <label>Szerokość</label>
          <input type='text' />
        </div>
        <div className={styles.input}>
          <label>Grubość</label>
          <input type='text' />
        </div>
        <div className={styles.input}>
          <label>Gramatura</label>
          <input type='text' />
        </div>
        <div className={styles.action}>
          <ButtonFunction name='Zapisz' />
        </div>
      </div>
  )
}

export default AddPaperForm;