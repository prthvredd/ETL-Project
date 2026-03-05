import { useState } from 'react'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [view, setView] = useState('home') // 'home' or 'browse'

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      alert('Login Successful!, Welcome ' + username)
      setLoggedIn(true)
    } else {
      alert('Login Failed!, Please Check Your Username and Password')
    }
    console.log('Username:', username)
    console.log('Password:', password)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setSelectedFile(file)
    console.log('Selected file:', file)
  }

  const renderLogin = () => (
    <div className="container">
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

  const renderHome = () => (
    <div className="app">
      <header>
        <div
          className="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          title="Menu"
        >
          ☰
        </div>
        {menuOpen && (
          <nav className="menu">
            <button
              onClick={() => {
                setMenuOpen(false)
                setSelectedFile(null)
                setView('home')
              }}
            >
              Home
            </button>
            <button
              onClick={() => {
                setMenuOpen(false)
                setView('browse')
              }}
            >
              Browse File
            </button>
          </nav>
        )}
      </header>
      <main>
        <h2 className="fade-text">Welcome to the ETL CSV Viewer</h2>
        <p>
          This website is being built for taking a csv sheet into the website
          and transforming it using a ETL pipeline and displaying the plots of
          any given value side by side.
        </p>
        {selectedFile && <p>Chosen file: {selectedFile.name}</p>}
      </main>
    </div>
  )

  const renderBrowse = () => (
    <div className="app browse">
      <header className="fade-in-header">
        <div
          className="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          title="Menu"
        >
          ☰
        </div>
        {menuOpen && (
          <nav className="menu">
            <button
              onClick={() => {
                setMenuOpen(false)
                setSelectedFile(null)
                setView('home')
              }}
            >
              Home
            </button>
          </nav>
        )}
      </header>
      <main>
        <h2>Browse Files</h2>
        <div className="browse-layout">
          <button onClick={() => document.getElementById('fileInput').click()}>
            Select Files
          </button>
          <span
            className="folder-icon"
            onClick={() => document.getElementById('fileInput').click()}
            title="Open folder"
          >
            📁
          </span>
          <input
            id="fileInput"
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
        {selectedFile && <p>Selected: {selectedFile.name}</p>}
      </main>
    </div>
  )

  return loggedIn ? (view === 'browse' ? renderBrowse() : renderHome()) : renderLogin()
}

export default App