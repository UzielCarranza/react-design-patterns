import React, {useState} from 'react';

export const UncontrolledOnboardingFlow = ({children, onFinish}) => {
    const [onBoardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex(currentChild + 1);
    }

    const currentChild = React.Children.toArray(children)[currentIndex];


    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext });
    }

    return currentChild;

}