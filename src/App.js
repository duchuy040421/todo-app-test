import Input from './components/input'
import Task from './components/task';

function App() {
  

  return (
    <div className="container is-flex is-justify-content-center is-align-items-center">
      <div className="wrap column is-half">
        <div className="is-flex p-6">
          <Input/>
        </div>
        <div className="list p-6 is-full column">
          <Task/>
        </div>
      </div>
    </div>
  );
}

export default App;
