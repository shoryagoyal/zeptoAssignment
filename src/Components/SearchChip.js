import { useState, useEffect } from 'react';
import data from './data';
import SearchResultsContainer from './SearchResultsContainer';
import { useSelector } from 'react-redux';

function SearchChip(props) {
    const chipsItem = useSelector((state) => state.chipsSlice.chipsItem);

    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState('');

    useEffect(() => {
        let updatedSearchedResults = [];
        for (let userData of data) {
            if (updatedSearchedResults.length == 5) break;
            if (userData.name.includes(searchText) && !isUserIncludedInChipsContainer(userData.id)) {
                updatedSearchedResults.push(userData);
            }
        }
        setSearchResults(updatedSearchedResults);
    }, [props.searchedResultsShown, searchText]);

    function isUserIncludedInChipsContainer(id) {
        for (let chip of chipsItem) {
            if (chip.id == id) return true;
        }
        return false;
    }

    function searchTextHandler(e) {
        console.log('something changed');
        setSearchText(e.target.value);
    }

    function clearInputField() {
        setSearchText('');
    }

    let searchResultsContainer = <SearchResultsContainer results={searchResults} clearInput={clearInputField} />;
    if (searchResults.length === 0 && searchText.length != 0) {
        searchResultsContainer = <div>No User Found</div>;
    }
    return (
        <div className="w-[100%]">
            <input
                type="text"
                className="w-[100%] border-b-2 border-blue-500 focus:outline-none"
                onChange={searchTextHandler}
                onKeyDown={(e) => {
                    if (searchText.length == 0 && e.key === 'Backspace') {
                        props.setBackspacePressedCountVal((prevState) => {
                            return prevState + 1;
                        });
                    }
                }}
                placeholder="Add new user"
                value={searchText}
                onClick={(e) => {
                    props.setSearchedResultsShown(true);
                    e.stopPropagation();
                }}
            ></input>
            {props.searchedResultsShown && searchResultsContainer}
        </div>
    );
}

export default SearchChip;
