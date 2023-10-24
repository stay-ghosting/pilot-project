export default function Navbar(){
  return (
    <>
  <nav className="nav">
    <a href="/home" className="site-home">
      HOMEPAGE
    </a>
    <ul>
    <li>
      <a href="/images">Images</a>
      </li>
      <li>
        <a href="/toDoList">To Do list</a>
      </li>
      <li>
      <a href="/about">About</a>
      </li>
    </ul>

  </nav>
  </>
  )
} 