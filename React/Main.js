import React, { createContext } from 'react';
import Comp from './Comp'
const Fname = createContext();
function Main() {
    return (
        < Fname.Provider value='ABC'>
            < Comp /> // component in which consuming the context
</ Fname.Provider >
);
}
export default Main
export { Fname }