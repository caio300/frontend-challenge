import { Route, Switch } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import Loja from "./Pages/Loja";
import Produto from "./Pages/Produto/";


function App() {

  return (
    <BrowserRouter>
      <Switch>
          <Route path='/produto' component={Produto} />
          <Route path='/' component={Loja}/>
      </Switch>
   </BrowserRouter>
  )
};

export default App;
