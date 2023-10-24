import React from 'react';
import TestimonialContext from './TestimonialContext';

const TestimonialProvider = ({children}) => {
    return(
        <>
         <TestimonialContext.Provider>
          {children}
         </TestimonialContext.Provider>
        </>
    );
}
export default TestimonialProvider;