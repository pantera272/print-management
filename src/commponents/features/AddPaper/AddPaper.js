import { useState } from 'react';
import AddPaperForm from '../../common/AddPaperForm/AddPaperForm';
import styles from './AddPaper.module.scss';

const AddPaper = () => {

  const errors = {
    nameMin: 3,
    nameMax: 20,
    widthMin: 500,
    widthMax: 1500,
    longMin: 500,
    longMax: 1500,
    grammageMin: 80,
    grammageMax: 500,
  };

  const [isError, setIsError] = useState([]);

  const [name, setName] = useState('');
  const [width, setWidth] = useState();
  const [long, setLong] = useState();
  const [grammage, setGrammage] = useState();

  const addPaper = (e) => {
    e.preventDefault();
    const nameLength = name.length;
    setIsError([]);
    
    if (nameLength < errors.nameMin || nameLength > errors.nameMax){
      setIsError(error => [...error, 'name']);
    }
    
    if (width < errors.widthMin || width > errors.widthMax){
      setIsError(error => [...error, 'width']);
    } 

    if (long < errors.longMin || long > errors.longMax){
      setIsError(error => [...error, 'long']);
    } 

    if (grammage < errors.grammageMin || grammage > errors.grammageMax){
      setIsError(error => [...error, 'grammage']);
    } 
  }

  return (
    <div className={styles.container}>
      <AddPaperForm 
        action={addPaper}
        name={setName}
        width={setWidth}
        long={setLong}
        grammage={setGrammage} 
        error={isError}
      />
    </div>
  )
} 

export default AddPaper;