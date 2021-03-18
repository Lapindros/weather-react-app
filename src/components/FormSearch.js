import React from "react";

const FormSearch = ({handleSubmit, city, handleChange}) => {
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="City1" className="form-label display-2 mt-4">City</label>
                <input
                    type="City"
                    className="form-control"
                    id="City1"
                    aria-describedby="emailHelp"
                    value={city}
                    onChange={e => handleChange(e)}
                />
                <div id="emailHelp" className="form-text">
                    Enter city to see weather.
                </div>
            </div>
            <button
                type="submit"
                className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}

export default FormSearch;