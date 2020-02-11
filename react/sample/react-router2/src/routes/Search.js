import React from 'react';

const Search = ({location}) => {
    return (
        <div>
            {/* Search Keyword: {location.search} */}
            {/* http://localhost:3000/search?keyword=안녕 */}
            Search Keyword: {new URLSearchParams(location.search).get("keyword")}
        </div>
    );
};

export default Search;