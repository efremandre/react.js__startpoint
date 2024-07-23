import React from 'react';
import MyInput from "../UI/input/MyInput.jsx";
import Select from "../UI/select/Select.jsx";

const Filters = ({filters, getSorting, getSearching}) => {

    return (
        <div className='filtersWrapper'>
            <MyInput
                placeholder='Поиск...'
                value={filters.query}
                onChange={getSearching}
            />

            <Select
                value={filters.sort}
                filters={filters}
                defaultValue={'Сортировка'}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}]}
                onChange={getSorting}
            />
        </div>
    );
};

export default Filters;
