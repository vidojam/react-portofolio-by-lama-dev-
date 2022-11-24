import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
 

export default function topbar({menuOpen,setMenuOpen}) { // we take menuOpen and setMenuOpen as props from App.jsx entries //
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
            <a href="#intro" className="logo">genius...</a>  
            <div className="itemContainer">
                <PersonIcon className="icon"/>
                <span>+954 246 6156</span>
            </div>    

            <div className="itemContainer">
                <MailIcon className="icon"/>
                <span>jose@genius.com</span>
            </div>   
        </div> 

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>  
    </div>

  );

}
