import AddPaperForm from '../../common/AddPaperForm/AddPaperForm';
import styles from './AddPaper.module.scss';

const AddPaper = () => {
  return (
    <div className={styles.container}>
      <AddPaperForm />
    </div>
  )
} 

export default AddPaper;