import Header from '../../common/Header/Header';
import OperationButtonsContainer from '../../features/OperationsButtonContainer/OperationsButtonsContainer';
import styles from './TopPanel.module.scss';

const TopPanel = () => {
  return (
    <>
      <Header />
      <OperationButtonsContainer />
    </>
  )
}

export default TopPanel;