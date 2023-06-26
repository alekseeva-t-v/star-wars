import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

const DataList = (props) => {
  const numberOfFacts = useSelector((state) => state.numberOfFacts);

  const elements = props.data.map((item) => {
    return (
      <li className="data-list-item" key={nanoid()}>
        {item}
      </li>
    );
  });
  return (
    <div className="wrapper">
      <ul className="data-list">{elements}</ul>
      {!numberOfFacts && <p className='info'>Список фактов пуст</p>}
    </div>
  );
};

export default DataList;
