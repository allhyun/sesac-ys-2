import { Link } from "react-router-dom"

export default function  Header () {
  return(
    <>
    <header className="Header">
      <div className="logo">Router 공부</div>
        <nav>
          <div>
            {/* a태그는 페이지를 새로고침하면서, 페이지를 이동시킴. */}
            {/* Link 컴포넌트는 페이지를 새로고침 시키지않고 컴포넌트만 변경함 */}
           <Link to="/">Home</Link>
          </div>
          <div>
            {/* <a href="/products">product</a> */}
           <Link to="products">Product</Link>
          </div>
          <div>
            {/* <a href="/products">product</a> */}
           <Link to="photos">Photo</Link>
          </div>
        </nav>
      

    </header>
    </>
  )
}