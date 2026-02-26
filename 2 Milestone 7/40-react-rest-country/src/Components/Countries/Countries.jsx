import React, { use } from "react";

const Countries = ({ countrirsPromise }) => {
  const countries = use(countrirsPromise);
  console.log(countries);
  
  return (
    <div>
      {countries.map((country) => (
        <div>
            <h4 key={country.id}>Name: <i>{country.name.common}</i></h4>
            <p></p>
        </div>
      ))}
    </div>
  );
};

export default Countries;
