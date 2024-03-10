import AddPaper from '../../features/AddPaper/AddPaper';
import TopPanel from '../TopPanel/TopPanel';
import styles from './AddPaperView.module.scss';

const AddPaperView = () => {
  return (
    <div className={styles.container}>
      <TopPanel />
      <AddPaper />
    </div>
  )
}

export default AddPaperView;