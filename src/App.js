import { useSelector } from 'react-redux';

import DataAddForm from './components/DataAddForm';
import DataList from './components/DataList';

const DATA = [
  'Прообразом Чубакки стал пёс режиссёра',
  'Актёрам разрешили подобрать любимый цвет для своих световых мечей',
  'В фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
  'Дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
  'Планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок',
];

function App() {
  const numberOfFacts = useSelector((state) => state.numberOfFacts);
  let newData = DATA.slice(0, numberOfFacts);

  return (
    <div className="App">
      <DataAddForm />
      <DataList data={newData} />
    </div>
  );
}

export default App;
