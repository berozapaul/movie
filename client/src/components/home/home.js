import React, { useState } from 'react';
import List from '../list/list';
import Search from '../search/search';

/*
 * Purpose: The purpose of this component is to render home page.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Home = () => {
    const [data, setData] = useState([]);
    const executeSearch = (data) => {
        setData(data);
    };
    return (
        <div>
            <h1 className="inscApp">IMDB Top Movies</h1>
            <Search
                onSearch={executeSearch}
            />
            <List />
        </div>
    )
};
export default Home;