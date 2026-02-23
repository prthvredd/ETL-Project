import { useState} from 'react' //makes sure it does not forgets anything
function App(){
  const [username, setUsername] = useState('') //useState is a hook that allows us to use state in a functional component. It returns an array with two elements: the current state and a function to update it. In this case, we are using destructuring to assign the current state to the variable username and the function to update it to setUsername.
  const [password, setPassword] = useState('') //password = " " this of it like this
  const handleLogin = () => {
    if (username == 'admin' && password == '1234') {
      alert("Login Successful!, Welcome " + username)
    }
    else {
      alert("Login Failed!, Please Check Your Username and Password")
    }
    console.log('Username:', username) //print the username to the vonsole anf the password to the console useful in backend
    console.log('Password:', password)
  }
  return (
    <div className = "container">
      <h1>Project</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )

}
export default App