import { createContext } from 'react';

const ColorContext = createContext({
    color: '',
    setColor: () => {},
    border: '',
    setBorder: () => {},
});

export default ColorContext;