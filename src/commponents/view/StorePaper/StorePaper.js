import { useSelector } from 'react-redux';
import TopPanel from '../TopPanel/TopPanel';
import style from './StorePaper.module.scss';

const StorePaper = () => {

  const paper = useSelector(state => state.paper);
  console.log(paper);

  return (
    <div className={style.container}>
      <TopPanel />
      magazyn papier
    </div>
  )
}

export default StorePaper;