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
    expeanableMenu: {
      Papier: 'magazyn/papier',
      Farba: 'magazyn/farby',
      Inne: 'magazyn/inne'
    }
  }

  const secoundButton = {
    name: 'Produkcja',
    expeanable: true,
    variant: 1,
    icon: <FontAwesomeIcon icon={faGears} />,
    expeanableMenu: {
      Druk_i_lakier: 'drukilakier',
      Złocenie: 'złocenie',
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Operations</div>
      <div className={styles.buttonContainer} >
        <ButtonOperation data={firstButton} />
      </div>
    </div>
  )
}

export default OperationButtonsContainer;

