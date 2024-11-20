
const Library = () => {
    return ( 
        <section>
            <div className="library-head">Your Library</div>
            <div className="library-buttons">
                <button className="img-btn">Likes</button>
                <button className="img-btn">Dislikes</button>
            </div>
            <div className="search-box">
                <a href="/" onClick={(e)=>{e.preventDefault()}}> <img src="searchbtn.svg" alt="search button" className="img-btn img-small-icon-btn" /> </a>
                <input type="search" name="search" className="library-search" />
            </div>
        </section>
     );
}
 
export default Library;