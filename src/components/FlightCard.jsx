// import React from 'react';

// const FlightCard = ({ airline, origin, destination, dates, economyMiles, additionalCost }) => {
//   return (
//     <div className="bg-green-900 p-4 rounded-lg shadow-lg m-2 w-64 text-white">
//       <div className="flex items-center justify-center mb-2">
//         <img src={airline.logo} alt={airline.name} className="h-8 w-auto" />
//       </div>
//       <h3 className="text-lg font-semibold">{airline.name}</h3>
//       <p className="text-sm">{origin} ➔ {destination}</p>
//       <p className="text-sm">{dates}</p>
//       <div className="mt-4">
//         <p>N/A</p>
//         <p className="text-xs">Min Business Miles</p>
//         <p>{economyMiles} + ${additionalCost.economy}</p>
//         <p className="text-xs">Min Economy Miles</p>
//         <p>N/A</p>
//         <p className="text-xs">Min First Miles</p>
//       </div>
//     </div>
//   );
// };

// export default FlightCard;

import React from 'react';

const FlightCard = ({ result, src, dest}) => {
  return (
    <div className="bg-green-900 p-2 rounded-lg w-64 text-white space-x-2">
      <div className="flex items-center justify-center bg-green-900 p-2">
        <img src='' alt='logo' className="h-8 w-auto bg-transparent" />
      </div>
      <div className=' bg-green-900 space-y-2'>
      <h3 className="text-2xl font-semibold  bg-green-900">{result.partner_program}</h3>
      <p className="text-sm  bg-green-900">{src} ➔ {dest}</p>
      <p className="text-sm  bg-green-900">2024-07-09-2024-10-07</p>
      <div className="mt-4  bg-green-900">
        {result.min_business_miles === null ? <p className='bg-green-900 text-3xl font-bold py-1'>N/A</p> :
            <div className=' bg-green-900'>
              <span className='text-3xl bg-green-900 font-bold'>{result.min_business_miles}</span>
                 + ${result.min_business_tax}
            </div>}
        
        <p className="text-xs  bg-green-900">Min Business Miles</p>
        <div className='py-3 bg-green-900'>
        {result.min_economy_miles === null ? <p className='bg-green-900 text-3xl font-bold mt-5'>N/A</p> :
            <div className='bg-green-900'>
              <span className='text-3xl bg-green-900 font-bold'>{result.min_economy_miles} </span>
                + ${result.min_economy_tax}
            </div>}
        <p className="text-xs  bg-green-900">Min Economy Miles</p>
        </div>
        
        {result.min_first_miles === null ? <p className='bg-green-900 text-2xl font-bold'>N/A</p> :
            <div>
              <span className='text-3xl font-bold'>{result.min_first_miles} </span>
                + ${result.min_first_tax}
            </div>}
        <p className="text-xs  bg-green-900">Min First Miles</p>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;