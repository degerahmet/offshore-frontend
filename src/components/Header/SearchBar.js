import React, { useEffect, useState }  from 'react';
import { Link } from 'react-router-dom';

export default function SearchBar({path}) {
    const [search, setSearch] = useState("");
    const [xpath, setPath] = useState(path);

    useEffect(() => {
        if (search.length === 42 && path === '/profile/'){
            setPath(xpath + search)
        }
    }, [search])

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for a wallet or user..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            { search.length === 42 ?  
            <div className="dropdown-menu">
                <Link className="dropdown-item" to={`${xpath}`}>{search.slice(0,5)}...{search.slice(21)}</Link>
            </div>
            : null
            }
        </div>
    )
}
