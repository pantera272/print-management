import { useSelector } from 'react-redux';
import TopPanel from '../TopPanel/TopPanel';
import style from './StorePaper.module.scss';
import DataPaperLists from '../../common/DataPaperLists/DataPaperLists';

const StorePaper = () => {

  const paper = useSelector(state => state.paper);
  console.log(paper);

  return (
    <div className={style.container}>
      <TopPanel />
      <DataPaperLists data={paper} />
    </div>
  )
}

export default StorePaper;