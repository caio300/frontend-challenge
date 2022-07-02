import { Route, Switch } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import Carrinho from "./Pages/Carrinho";
import Loja from "./Pages/Loja";
import Produto from "./Pages/Produto/";


function App() {

  return (
    <BrowserRouter>
      <Switch>
          <Route path='/produto/:page/:id' component={Produto} />
          <Route path='/carrinho' component={Carrinho}/>
          <Route path='/' component={Loja}/>
      </Switch>
   </BrowserRouter>
  )
};

export default App;
