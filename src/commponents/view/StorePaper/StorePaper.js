import { useSelector } from 'react-redux';
import TopPanel from '../TopPanel/TopPanel';
import style from './StorePaper.module.scss';
import DataPaperLists from '../../common/DataPaperLists/DataPaperLists';
import { getAllPapers } from '../../../redux/paperReducer';

const StorePaper = () => {

  const paper = useSelector(getAllPapers);

  return (
    <div className={style.container}>
      <TopPanel />
      <DataPaperLists data={paper} />
    </div>
  )
}

export default StorePaper;