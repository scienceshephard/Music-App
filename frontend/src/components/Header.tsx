
const Header = () => {
    return ( 
        <div className="header">
            <div className="header-menu">
                <optgroup>
                    <option value="settings">Settings</option>
                    <option value="settings">Account Settings</option>
                </optgroup>
            </div>
            <div className="header-home">
                <a href="/" style={{display:'flex'}}><img src="homebtn.svg" alt="homeBtn" className="img-btn img-icon-btn" /></a>
                <div className="search-box" >
                    <button className="button"><img src="searchbtn.svg" alt="searchbtn" className="img-btn img-icon-btn" /></button>
                    <input type="search" name="search" id="search" placeholder="What do you want to play" />
                </div>
            </div>
        </div>
     );
}
 
export default Header;