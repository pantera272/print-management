import styles from './ButtonFunction.module.scss';

const ButtonFunction = ({name}) => {
  return (
    <a href='/addpaper' className={styles.link}>
      <button>{name}</button>
    </a>
  )
}

export default ButtonFunction;