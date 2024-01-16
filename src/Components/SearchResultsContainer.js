import SearchResult from './SearchResult';

function SearchResultsContainer(props) {
    if (props.results.length == 0) return <></>;
    return (
        <div>
            {props.results.map((result) => (
                <SearchResult
                    name={result.name}
                    email={result.email}
                    key={result.id}
                    userId={result.id}
                    avatar={result.avatar}
                    clearInput={props.clearInput}
                />
            ))}
        </div>
    );
}

export default SearchResultsContainer;
