import './SubredditList.css';
import React from "react";

const SubredditList = () => {
    const subRedditsList = [ {
        label: 'Mama 1',
        value: 'Mama 1'
    },  {
        label: 'Mama 2',
        value: 'Mama 2'
    }, {
        label: 'Mama 3',
        value: 'Mama 3'
    }, {
        label: 'Mama 3',
        value: 'Mama 4'
    }];

    return (
        <div>
            <select>
                {subRedditsList.map((option) => (
                <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default SubredditList;