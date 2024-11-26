import { useEffect, useRef, useState } from "react";
const Library = () => {
    const[searchBTN, setSearchBTN]= useState(false)
    const searchbtnRef= useRef(null)
    const focusSearchBox= () =>{
        setSearchBTN(!searchBTN)
        setTimeout(() => {
            if(searchbtnRef.current){
                searchbtnRef.current.focus();   
            }
        }, 0);
        console.log(searchBTN);
        
    }
        //handles searchbutton click outside event
    const handleClickOutside=(event:Event)=>{
        if(searchbtnRef.current && !searchbtnRef.current.contains(event.target)){
            setSearchBTN(false)
        }
    }
        useEffect(()=>{
            if(searchBTN){
                document.addEventListener("mousedown", handleClickOutside)
            }else{
                document.addEventListener("mousedown", handleClickOutside)
            }
            return ()=>{
                document.removeEventListener("mousedown", handleClickOutside)
            }
        }, [searchBTN])

    return ( 
        <section>
            <div className="library-head">Your Library</div>
            <div className="library-buttons">
                <button className="img-btn lib-button">Likes</button>
                <button className="img-btn lib-button">Dislikes</button>
            </div>
            <div className="library-search-box">
                <button className="button" onClick={focusSearchBox}> <img src="searchbtn.svg" alt="search button" className="img-btn img-small-icon-btn" /> </button>
                { searchBTN && <input type="search" ref={searchbtnRef} name="search" className="library-search" />}
            </div>
        </section>
     );
}
 
export default Library;