import styles from './DataPaperLists.module.scss';

const DataPaperLists = ({data}) => {

  console.log(data);

  return(
    <div className={styles.container}>
      <h1>Papier</h1>
      <div className={styles.tableContainer}>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nazwa</th>
                <th>Szerokość</th>
                <th>Długość</th>
                <th>Gramatura</th>
                <th>Akcja</th>
              </tr>
            </thead>
            <tbody>
              {data.map(value => 
                  <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.width}</td>
                    <td>{value.height}</td>
                    <td>{value.grammage}</td>
                    <td>button</td>
                  </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>  
    </div>
  )
}

export default DataPaperLists;