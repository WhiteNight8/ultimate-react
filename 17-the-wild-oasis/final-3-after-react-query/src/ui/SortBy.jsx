import React, {memo} from 'react'
import Select from "./Select.jsx";
import {useSearchParams} from "react-router-dom";

const SortBy = memo(({options}) => {
    const [searchParams,setSearchParams]=useSearchParams()

    const sortBy = searchParams.get('sortBy') || '';

    function  handleChange(e) {
        searchParams.set('sortBy', e.target.value);
        setSearchParams(searchParams)

    }

    return (
        <div>
            <Select value={sortBy} options={options} type='white' onChange={handleChange}/>
        </div>
    )
})

export default SortBy
