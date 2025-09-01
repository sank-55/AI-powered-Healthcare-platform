import React from 'react'
import { createContext } from 'react'
import { doctors } from '../assets/asset'
// By using use Context hook the object can be easily used
export const DoctorContext = createContext()

const DoctorContextProvider = (props) =>
 {
    const value = {
        doctors
    }
    return (
        <DoctorContext.Provider value={value}>
            {Props.children}
        </DoctorContext.Provider>
    );
}

export default DoctorContextProvider
