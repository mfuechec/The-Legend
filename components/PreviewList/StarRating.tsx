import React from 'react';
import {Rating} from 'react-native-elements';

let StarRating = ({rating}) => {
    return (
        <Rating
            imageSize={20}
            readonly
            startingValue={rating}
        />
    )
}

export default StarRating;