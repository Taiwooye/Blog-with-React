const Create = () => {
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>

            <form> 

                <label >Blog title</label>
                <textarea required>

                </textarea>
                <label >Blog Author:</label>
                <select >
                    <option value="mario">mario</option>
                    <option value="miles">miles</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;