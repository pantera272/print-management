import styles from './ButtonOperation.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const OperationButton = ({data}) => {
  //color of button
  const colorButton = [styles.containerFirst, styles.second];

  return (
    <div className={clsx(styles.container, colorButton[data.variant])}>
      <button className={styles.button} >
        <span className={styles.icon}>{data.icon}</span>
        <span className={styles.text}>{data.name}</span>
        <span className={styles.more}>
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
        <div className={styles.submenu}>
          <a href='#'>jeden</a>
          <a href='#'>dwa</a>
          <a href='#'>trzy</a>
        </div>
      </button>
    </div> 
  )
}

export default OperationButton;