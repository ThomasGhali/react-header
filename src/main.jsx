import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById("root"));

function Header() {
  return (
      <header className="header">
          <img src="react-logo.png" className="nav-logo" alt="React logo" />
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


function Page() {
  return (
      <>
          <Header />
      </>
  )
}

root.render(
  <Page />
)
