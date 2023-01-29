const Navbar = () => {
    
    return (  
        <nav className="navbar">
            <div >
                <a className="logo" href="">Bproo Blog</a>
                </div>
            <ul className="liens">
                <li>
                    <a  href="" className="lien">Accueil</a>
                </li>
                <li>
                    <a href="" className="lien buttonArticle" >Créer Article</a>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar ;