import { Route, Switch } from "react-router-dom"
import Loja from "./Pages/Loja";

function App() {

  return (
   <Switch>
      <Route path='/' component={Loja}/>
   </Switch>
  )
};

export default App;
