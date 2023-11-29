import './App.css'
import Label from './components/label'

function App() {

  return (
    <>
      <div className="container">
        <h1>Please Login</h1>
        <form>
          <div className="form-control">
            <input name='email' type="text" required/>
            <Label htmlFor='email'>Email</Label>
          </div>

          <div className="form-control">
            <input name='password' type="password" required/>
            <Label htmlFor='password'>Password</Label>
          </div>

          <button className="btn">Login</button>
          <p className="text">Don't have an account? <a href="#">Register</a></p>
        </form>
      </div>
    </>
  )
}

export default App
