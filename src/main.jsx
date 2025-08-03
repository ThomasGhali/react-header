import logo from './assets/react-logo.png'
import './index.css'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById("root"));

function Header() {
  return (
      <header className="header">
          <img src={logo} className="nav-logo" alt="React logo" />
          <nav>
              <ul className="nav-list">
                  <li className="nav-list-item">Pricing</li>
                  <li className="nav-list-item">About</li>
                  <li className="nav-list-item">Contact</li>
              </ul>
          </nav>
      </header>
  )
}

function MainContent() {
  return (
      <main>
          <h1>Reason I am excited to learn React</h1>
          <ol>
              <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
              <li>I am more likely to get a job as a front end developer if I know React</li>
          </ol>
      </main>
  )
}

function Footer() {
  return (
      <footer>
          © 2025 thomas development. All rights reserved.
      </footer>
  )
}

function Page() {
  return (
      <>
          <Header />
          <MainContent />
          <Footer />
      </>
  )
}

root.render(
  <Page />
)

console.log(logo)
