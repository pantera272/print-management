import ButtonOperation from '../../common/ButtonOperation/ButtonOperation';
import styles from './OperationButtonsContainer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faWarehouse } from '@fortawesome/free-solid-svg-icons';

const OperationButtonsContainer = () => {

  //expeanable menu data
  const firstButton = {
    name: 'Magazyn',
    expeanable: true,
    variant: 0,
    icon: <FontAwesomeIcon icon={faWarehouse} />,
    expeanableMenu: [
      {papier: 'storepaper'},
      {farba: 'storepaint'},
      {inne: 'storeelse'}
    ] 
  }

  const secondButton = {
    name: 'Zlecenia',
    expeanable: false,
    variant: 1,
    icon: <FontAwesomeIcon icon={faGears} />,
    link: 'orders'
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Operations</div>
      <div className={styles.buttonContainer} >
        <ButtonOperation data={firstButton} />
        <ButtonOperation data={secondButton} />
      </div>
    </div>
  )
}

export default OperationButtonsContainer;

