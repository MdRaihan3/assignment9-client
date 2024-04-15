import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';
import House from './House';

const Houses = () => {
    const [estateCards, setEstateCards] = useState([])
    useEffect(() => {
        fetch('houses.json')
            .then(res => res.json())
            .then(data => setEstateCards(data))
    }, [])
    console.log(data)
    return (
        <div className=' grid grid-cols-3 gap-6 my-8'>
            {
                estateCards.map( house => <House key={house.id} house={house}></House>)
            }
        </div>
    );
};

export default Houses;