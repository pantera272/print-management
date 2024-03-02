import styles from './ButtonOperation.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import shortid from 'shortid';

const OperationButton = ({data}) => {
  //color of button
  const colorButton = [styles.containerFirst, styles.containerSecond];

  if(data.expeanableMenu){
    return (
      <div className={clsx(styles.container, colorButton[data.variant])}>
        <button className={styles.button} >
          <span className={styles.icon}>{data.icon}</span>
          <span className={styles.text}>{data.name}</span>
          <span className={styles.more}>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
          <div className={styles.submenu}>
            {data.expeanableMenu.map(value => 
              <a key={shortid.generate()} href={Object.values(value)[0]}>{Object.keys(value)[0]}</a>
            )}
          </div>
        </button>
      </div> 
    )
  } else {
    return(
    < div className={clsx(styles.container, colorButton[data.variant])}>
        <a href={data.link}>
          <button className={styles.button} >
            <span className={styles.icon}>{data.icon}</span>
            <span className={styles.text}>{data.name}</span>
          </button>
        </a>
      </div>
    ) 
  }
}

export default OperationButton;