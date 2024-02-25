import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import styles from './TopHeader.module.scss';

const TopHeader = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon className={styles.icon} icon={faPrint} />  
      <span className={styles.companyName}>PrintMANAGEMENT</span>
    </div>
  )
}

export default TopHeader;