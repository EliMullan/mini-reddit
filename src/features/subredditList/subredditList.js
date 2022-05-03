import './SubredditList.css';
import React from "react";

const SubredditList = () => {
    const subRedditsList = [ {
        id:'1',
        label: 'Mama 1',
        value: 'Mama 1'
    },  {
        id:'2',
        label: 'Mama 2',
        value: 'Mama 2'
    }, {
        id:'3',
        label: 'Mama 3',
        value: 'Mama 3'
    }, {
        id:'4',
        label: 'Mama 3',
        value: 'Mama 4'
    }];

    return (
        <div>
            <select>
                {subRedditsList.map((option) => (
                <option key={option.id} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default SubredditList;