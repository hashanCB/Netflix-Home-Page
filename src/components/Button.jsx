import React from 'react';

const Button = ({ title, color , extra}) => {
  return (

     <div className={`flex items-center bg-${color}-600 ${extra}  `}>
      <button>
        {title}
      </button>
    </div>
  );
};

export default Button;
