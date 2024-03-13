import styles from './AddPaperForm.module.scss';
import ButtonFunction from './../ButtonFunction/ButtonFunction';
import clsx from 'clsx';

const AddPaperForm = ({ action, name, width, long, grammage, error }) => {

  console.log(error);
  
  return (
    <div className={styles.form}>
        <h2>Dodaj papier</h2>
        <div className={styles.input}>
          <label>Nazwa</label>
          <input type='text' className={clsx(error.includes('name') && styles.error)} onChange={e => name(e.target.value)} />
          <p className={clsx(error.includes('name') ? styles.show : styles.hide)}>Nazwa powinna zawierać od 3 do 20 znaków</p>
        </div>
        <div className={styles.input}>
          <label>Szerokość</label>
          <input type='text' className={clsx(error.includes('width') && styles.error)} onChange={e => width(e.target.value)} />
          <p className={clsx(error.includes('width') ? styles.show : styles.hide)}>Szerokość</p>
        </div>
        <div className={styles.input}>
          <label>Długość</label>
          <input type='text' className={clsx(error.includes('long') && styles.error)} onChange={e => long(e.target.value)} />
          <p className={clsx(error.includes('long') ? styles.show : styles.hide)}>Długość</p>
        </div>
        <div className={styles.input}>
          <label>Gramatura</label>
          <input type='text' className={clsx(error.includes('grammage') && styles.error)} onChange={e => grammage(e.target.value)} />
          <p className={clsx(error.includes('grammage') ? styles.show : styles.hide)}>Gramatura</p>
        </div>
        <div className={styles.action}>
          <ButtonFunction name='Zapisz' action={e => action(e)} />
        </div>
      </div>
  )
}

export default AddPaperForm;