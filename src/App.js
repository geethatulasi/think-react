import logo from './logo.svg';
import './App.css';
import Filterabletable from './Filterabletable';
import UserFilterableTable from './UserFilterableTable';
import Gallery from './Gallery';
import { Profile } from './Gallery';
import FruitList from './FruitList';
import PackingList from './PackingList';
import PeopleList from './PeopleList';
import TeaGathering from './TeaGathering';
import QuizForm from './Quiz';
import FeedbackForm from './FeedbackForm';
function App() {
  return (
    <>
      {/* <Filterabletable />
      <UserFilterableTable />
      <Gallery />
      <Profile /> 
      <FruitList />
      <PackingList />
      <PeopleList />
      <TeaGathering /> */}
      <QuizForm />
      <FeedbackForm />
    </>
  );
}

export default App;
