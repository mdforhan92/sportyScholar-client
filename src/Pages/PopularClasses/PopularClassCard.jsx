import React from 'react';

const PopularClassCard = ({item}) => {
    const {name, image, email, numOfStudents} = item;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default PopularClassCard;