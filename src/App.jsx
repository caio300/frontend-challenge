import { Route, Switch } from "react-router-dom"
import Loja from "./Pages/Loja";
import Produto from "./Pages/Produto/";


function App() {

  return (
   <Switch>
      <Route path='/produto' component={Produto} />
      <Route path='/' component={Loja}/>
   </Switch>
  )
};

export default App;
