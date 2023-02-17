import Topbar from "./top-bar";
import SecondeBar from "./seconde-bar";

const Navbar = () => {
    return (
        <header class="fixed h-auto w-screen z-50">
         <Topbar/>
         <SecondeBar />
        </header>
    );
}

export default Navbar;