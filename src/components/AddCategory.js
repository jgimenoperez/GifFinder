import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setcategories }) => {
  const [inputvalue, setinputvalue] = useState(``);

  const handleImputChange = (e) => {
    //console.log('handleImputChange llamado');
    setinputvalue(e.target.value);
  };

  const handdleSubmit = (e) => {
    e.preventDefault();

    if (inputvalue.trim().length > 2) {
      setcategories((cats) => [inputvalue, ...cats]);
      setinputvalue('');
    }

  };

  return (
    <div>
      <form onSubmit={handdleSubmit}>
        {/* <p>{inputvalue}</p> */}
        <input type="text" value={inputvalue} onChange={handleImputChange} />
      </form>
    </div>
  );
};

AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired,
};
