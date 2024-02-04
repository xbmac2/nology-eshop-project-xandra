import styles from "./OverFooterWrapper.module.scss";

const OverFooterWrapper = ({children}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default OverFooterWrapper