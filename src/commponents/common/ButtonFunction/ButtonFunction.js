import styles from './ButtonFunction.module.scss';

const ButtonFunction = ({name, action}) => {
  return (
    <a href='/addpaper' className={styles.link}>
      <button onClick={e => action(e)}>{name}</button>
    </a>
  )
}

export default ButtonFunction;