import ChipsContainer from './Components/ChipsContainer';
import SearchChip from './Components/SearchChip';
import { useState } from 'react';

function App() {
    const [searchResultVisibility, setSearchResultVisibility] = useState(false);
    const [backspacePressedCount, setBackspacePressedCount] = useState(0);
    console.log(backspacePressedCount);
    return (
        <div
            onClick={() => {
                setSearchResultVisibility(false);
            }}
        >
            <div className="text-6xl text-center my-6 text-blue-600">Pick User</div>
            <div className="flex justify-center items-center">
                <div className="w-1/3">
                    <ChipsContainer />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-1/3 pt-4">
                    <SearchChip
                        searchedResultsShown={searchResultVisibility}
                        setSearchedResultsShown={setSearchResultVisibility}
                        setBackspacePressedCountVal={setBackspacePressedCount}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
