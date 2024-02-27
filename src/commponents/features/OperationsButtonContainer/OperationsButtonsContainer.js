import ButtonOperation from '../../common/ButtonOperation/ButtonOperation';
import styles from './OperationButtonsContainer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faWarehouse } from '@fortawesome/free-solid-svg-icons';

const OperationButtonsContainer = () => {

  //button  icon
  const firstButton = <FontAwesomeIcon icon={faWarehouse} />
  const secondButton = <FontAwesomeIcon icon={faGears} />

  return (
    <div className={styles.container}>
      <div className={styles.title}>Operations</div>
      <div className={styles.buttonContainer} >
        <ButtonOperation name='Magazyn' icon={firstButton} variant='0' />
        <ButtonOperation name='Produkcja' icon={secondButton} variant='1' />
      </div>
    </div>
  )
}

export default OperationButtonsContainer;

