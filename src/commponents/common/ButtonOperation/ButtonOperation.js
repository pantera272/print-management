import styles from './ButtonOperation.module.scss';
import clsx from 'clsx';

const OperationButton = ({name, icon, variant}) => {

  const colorButton = [styles.first, styles.second];

  return (
    <div className={styles.container}>
      <button className={clsx(styles.button, colorButton[variant])}>
        {icon}
        <span>{name}</span>
      </button>
    </div> 
  )
}

export default OperationButton;