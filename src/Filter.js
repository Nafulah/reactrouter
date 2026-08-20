function Filter({ setTitleFilter, setRatingFilter, ratingFilter }) {
    return (
        <div style={{display: "flex-", justifyContent: "center", gap: "20px", marginBottom: "30px"}}>
            <input
                type="text"
                placeholder="Search by title"
                onChange={(e) => setTitleFilter(e.target.value)}
                style={{padding: "10px", borderRadius: "5px", border: "1px solid #9370db",  marginRight: '10px', width: "300px"}} />
                <select
                value={ratingFilter}
                onChange={(e) => setRatingFilter(Number(e.target.value))}
                style={{padding: "10px", borderRadius: "5px", border: "1px solid #9370db"}}>
                <option value={1}>Rating: 1+</option>
                <option value={2}>Rating: 2+</option>
                <option value={3}>Rating: 3+</option>
                <option value={4}>Rating: 4+</option>
                <option value={5}>Rating: 5+</option>

                </select>
            </div>
    );
}export default Filter;