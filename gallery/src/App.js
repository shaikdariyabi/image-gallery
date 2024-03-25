
import './App.css';

function App() {

  
    return <div>
      <h1>Users:</h1>
   <section className="container">
      <User name="Shahena" job="Teacher"  hometown="vijayawada" />
      <User name="Sabiha"  job="Lawyer" hometown="Vizag" />
      <User name="Divya" job="doctor" address="L.Mcolony"  />
      <User name="Dariyabi" job="Developer" address="L.Rcolony"  />
      </section>
    </div>
    
    
}
function User(props) {
  return <div className= "user my-class">
    <h1>{props.name}</h1>
    <p>job: {props.job}</p>
    <p>address: {props.address}</p>
    <p>hometown: {props.hometown }</p>
  </div>

}


export default App;
