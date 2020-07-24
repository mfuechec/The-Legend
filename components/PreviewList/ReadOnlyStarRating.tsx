import React from 'react';
import {Rating} from 'react-native-elements';

let ReadOnlyStarRating = ({rating}) => {
    return (
        <Rating
            imageSize={20}
            readonly
            startingValue={rating}
        />
    )
}

export default ReadOnlyStarRating;