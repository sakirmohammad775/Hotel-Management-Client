
const Navbar = () => {
    return (
        <>
            <header className="header absolute">
                <div className="logo-container">
                    <span className="colorlib-logo">colorlib</span>
                    <span className="unwind-logo">Unwind</span>
                </div>
                <nav className="nav">
                    <a href="#home">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#rooms">ROOMS</a>
                    <a href="#resto-bar">RESTO & BAR</a>
                    <a href="#blog">BLOG</a>
                    <a href="#contact">CONTACT</a>
                </nav>
                <div className="icons">
                    <span role="img" aria-label="desktop" className="icon">&#128400;</span>
                    <span role="img" aria-label="tablet" className="icon">&#128400;</span>
                    <span role="img" aria-label="phone" className="icon">&#128241;</span>
                    <span role="img" aria-label="cart" className="icon">&#128722;</span>
                    <span role="img" aria-label="close" className="icon">&#10060;</span>
                </div>
            </header>



        </>
    );
};

export default Navbar;
