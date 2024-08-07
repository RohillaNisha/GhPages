import { createContext, useState } from 'react'
import PropTypes from 'prop-types'


export const TextboxContext = createContext();

export const TextboxProvider = ({children}) => {
    const [hireClicked, setHireClicked] = useState(false);
    const [message, setMessage] = useState('');

    const handleHireMeClick = () => {
        setHireClicked(true);
        setMessage('Hello, I am interested in discussing job opportunities with you.')
    }

    return(
        <TextboxContext.Provider value={{ hireClicked, setHireClicked, message, setMessage, handleHireMeClick}}>
            {children}
        </TextboxContext.Provider>
    )
}

TextboxProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
