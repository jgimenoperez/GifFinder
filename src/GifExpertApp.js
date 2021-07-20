import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultcategories = [] }) => {
  // const categories = ['One Puch', 'Samuraix' , 'Dragon Ball']
  const [categories, setcategories] = useState(defaultcategories);

  return (
    <div>
      <h2>GifFindApp</h2>
      <AddCategory setcategories={setcategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button>  */}
      <ol>
        {categories.map((categorie) => {
          //console.log(categorie)
          //  return <li key={ categorie} >{categorie}</li>
          return <GifGrid key={categorie} categorie={categorie} />;
        })}
      </ol>
    </div>
  );
};
