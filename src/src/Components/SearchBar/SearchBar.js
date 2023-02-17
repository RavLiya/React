import { useState } from "react";
import { Link } from "react-router-dom";
import useSearch from "../Hooks/useSearch";
import Post from "../Post/Post";

export default function SearchBar({posts}) {
    const [searchTerm, setSearchTerm, searchResults] = useSearch(posts);
    const [input, setInput] = useState(searchTerm);
    const onSearch = e => {
        e.preventDefault();
        setSearchTerm(input)    
    }

    return(
        <div>
            <form onSubmit={onSearch}>
                <div>
                    <input type="text" placeholder='Keywords...' className="searchBarText" value={input} onChange={e => setInput(e.target.value)}/>
                </div>
                <button type="submit">Search</button>
                <Link to="/"><button>Home</button></Link>
            </form>
            {searchResults.map((post,i) => <Post post={post} key={i}/>)}
        </div>
    );
}