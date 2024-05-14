import React, { useState } from 'react';

const ArrayOperations = () => {
    const numbers = [1, 2, 3, 4, 5];

    // For Map 
    const mappedArray = numbers.map(num => num * 2);
    console.log(mappedArray); // Output: [2, 4, 6, 8, 10]

    //  For Flat 

    const nestedArray = [[1, 2], [3, 4], [5]];
    const flattenedArray = nestedArray.flat();
    console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]

    // For Slice 

    const slicedArray = numbers.slice(1, 4);
    console.log(slicedArray); // Output: [2, 3, 4]

    // For Filter

    const filteredArray = numbers.filter(num => num % 2 === 0);
    console.log(filteredArray); // Output: [2, 4]




    return (
        <div>
        </div>
    );
};

export default ArrayOperations;
