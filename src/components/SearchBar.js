function SearchBar({ searchQuery, onSearchChange }) {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search for songs..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
            />
            {searchQuery && (
                <button
                    onClick={() => onSearchChange('')}
                    className="clear-search-button"
                >
                    X
                </button>
            )}
        </div>
    );
}

export default SearchBar;