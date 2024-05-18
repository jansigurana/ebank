import './App.css'

// Replace your code here
const App = () => (
    <div>
     <Switch>
      <Route exact path="/ebank/login" component={Login}/>
      <Route exact path="/" component={Home}/>
      <NotFound/>
     </Switch>
    </div>
)
export default App
