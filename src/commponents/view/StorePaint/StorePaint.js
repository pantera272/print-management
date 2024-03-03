import TopPanel from '../TopPanel/TopPanel';
import style from './StorePaint.module.scss';

const StorePaint = () => {
  return (
    <div className={style.container}>
      <TopPanel />
      store paint
    </div>
  )
}

export default StorePaint;