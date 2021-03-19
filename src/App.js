//import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from './component/Container';
import Home from './views/HomePage';
import Register from './component/Register/Register';
import Login from './component/Login/login'
import Phonebook from './component/ContactForm/Phonebook'
//import ContactList from './component/ContactList/ContactList'
import Header from './component/Header/Header';
//import RegisterForm from './component/Register/Register'




export default function App() {
 // const dispatch = useDispatch();

  /*useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
*/
  return (
    <Container>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/contacts" component={Phonebook} />
      </Switch>
    </Container>
  );
}

/*class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <div>
          <ContactForm />
          <ContactList />
        </div>


        <RegisterForm/>
      </div>
    )
  }
}

export default App
*/