const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Miles Blog</h1>
            <div className="links">
                <a href="/">Home</a>
               <a href="/create" style={{
                color: "white",
                background: "#f1356d",
                borderRadius: "8px",
               }}>News Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;