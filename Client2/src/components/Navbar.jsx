export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <a href="/Home" className="site-home">
          HOMEPAGE
        </a>
        <ul>
          <li>
            <a href="/images">Images</a>
          </li>
          <li>
            <a href="/todosList">To Do list</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>

      </nav>
    </>
  )
} 