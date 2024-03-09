import { useSelector } from 'react-redux';
import TopPanel from '../TopPanel/TopPanel';
import style from './StorePaper.module.scss';
import DataPaperLists from '../../common/DataPaperLists/DataPaperLists';
import { getAllPapers } from '../../../redux/paperReducer';
import PaperButtons from '../../features/PaperButtons/PaperButtons';

const StorePaper = () => {

  const paper = useSelector(getAllPapers);

  return (
    <div className={style.container}>
      <TopPanel />
      <PaperButtons />
      <DataPaperLists data={paper} />
    </div>
  )
}

export default StorePaper;