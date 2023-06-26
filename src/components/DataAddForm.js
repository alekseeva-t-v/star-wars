import { useDispatch, useSelector } from 'react-redux';

import { numberActions } from '../store/numberSlice';

const DataAddForm = () => {
  const dispatchFunction = useDispatch();
  const isValidnumber = useSelector((state) => state.isValidnumber);


  const ValueChangeNumberHandler = (event) => {
    if (event.target.value >= 1 && event.target.value <= 5) {
      dispatchFunction(numberActions.showing(event.target.value));
      dispatchFunction(numberActions.valid());
    } else {
      dispatchFunction(numberActions.showing(0));
      dispatchFunction(numberActions.notValid());
    }
  };

  return (
    <div className="wrapper">
      <input
        type="number"
        className="form-control"
        placeholder="Введите количество фактов о Star Wars"
        name="data"
        min="1"
        max="5"
        onChange={ValueChangeNumberHandler}
      />
      {!isValidnumber && <p className='info'>Введите число от одного до пяти</p>}
    </div>
  );
};

export default DataAddForm;
