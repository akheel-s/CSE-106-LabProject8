const Navbar = () => {
    let name = "Bob"

    const sayName = () => {
        console.log("Add function to pull name")
    }

    const signOut = () => {
        console.log("Add function for signing out")
    }

    return (
        <nav className="navbar">
            <div className="center" id="topbar">
            {/* //CHANGE FOR EACH USER */}
            <h4 id="greeting" onload={sayName()}>Welcome back {name}.</h4>
            <h1 id="school">ACME University</h1>
            {/* <!--Add link to login page--> */}
            <button id="status" onClick={signOut}>Sign Out</button>
        </div>
        </nav>
        
    );
}

export default Navbar;