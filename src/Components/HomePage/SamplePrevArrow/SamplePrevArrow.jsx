import { ArrowLeft } from 'lucide-react';
import React from 'react'

const SamplePrevArrow = ({ onClick }) => {
    return (
        <>
            <button
                className="absolute right-12 -top-10 -translate-y-1/2 "
                onClick={onClick}
            >
                <ArrowLeft className="w-5 h-5 text-blue-600 group-hover:stroke-white" />
            </button>
        
        </>
      
    );
}

export default SamplePrevArrow