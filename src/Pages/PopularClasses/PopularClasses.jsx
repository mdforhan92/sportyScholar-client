import React, { useEffect, useState } from 'react';
import PopularClassCard from './PopularClassCard';

const PopularClasses = () => {
    const [popularClass, setPopularClass] = useState([])
    useEffect(()=>{
        fetch('popularClass.json')
        .then(res=>res.json())
        .then(data=>{ 
            const sortedArray = data.sort((a, b) => b.numOfStudents - a.numOfStudents);
            setPopularClass(sortedArray)})
    },[])
    const displayedSports = popularClass.slice(0, 6);
    return (
        <div>
            {
                displayedSports.map(item => <PopularClassCard
                key={item.id}
                item={item}
                ></PopularClassCard>)
            }
            
        </div>
    );
};

export default PopularClasses;