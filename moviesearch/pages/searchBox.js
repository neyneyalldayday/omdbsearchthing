export const SearchBox = (props) => {

    return (
        <>
        <div className="search-box">
        <h1 className="search-title">gonna search some movies</h1>
        <div>
            <form>
                <label className="search-label">search</label>
                <input type="text"/>
                <button  className="search-button" type="submit">Submit</button>
            </form>
        </div>
        </div>
        </>
    )

}