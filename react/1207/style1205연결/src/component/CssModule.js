import styles from "../styles/origin.module.css"

function CssModule(){
  // ['a', 'b'].join('')=>'a b'
  return(
    <>
     {/* <div className={styles.origin}>
       <div className={`${styles.box} ${styles.red}`}></div>
       <div className={[styles.box, styles.orange]}></div>
       <div className={[styles.box, styles.green]}></div>
       <div className={[styles.box, styles.yellow]}></div>
     </div> */}

     <div className={styles.origin}> 
        <div className={`${styles.box} ${styles.red}`}></div>
        <div className={[styles.box, styles.orange].join(' ')}></div>
        <div className={[styles.box, styles.green].join(' ')}></div>
        <div className={[styles.box, styles.yellow].join(' ')}></div>
     </div>

    </>
  )
}

export default CssModule