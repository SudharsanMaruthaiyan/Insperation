import { ArrowRight } from 'lucide-react';
import React from 'react'

const SampleNextArrow = ({ onClick }) => {
    return (
      <button
        className="absolute right-2 -top-10 -translate-y-1/2"
        onClick={onClick}
      >
        <ArrowRight className="w-5 h-5 text-blue-600 group-hover:stroke-white" />
      </button>
    );
}

export default SampleNextArrow