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

const FlightCard = ({ result, origin, destination}) => {
  return (
    <div className="bg-green-900 p-4 rounded-lg shadow-lg m-2 w-64 text-white">
      <div className="flex items-center justify-center mb-2">
        {/* <img src={airline.logo} alt={airline.name} className="h-8 w-auto" /> */}
      </div>
      <h3 className="text-lg font-semibold">{result.partner_program}</h3>
      <p className="text-sm">{origin} ➔ {destination}</p>
      <p className="text-sm">2024-07-09-2024-10-07</p>
      <div className="mt-4">
        {result.min_business_miles === null ? <p>N/A</p> :
            <div>
                {result.min_business_miles} + ${result.min_business_tax}
            </div>}
        
        <p className="text-xs">Min Business Miles</p>
        {result.min_economy_miles === null ? <p>N/A</p> :
            <div>
                {result.min_economy_miles} + ${result.min_economy_tax}
            </div>}
        <p className="text-xs">Min Economy Miles</p>
        {result.min_first_miles === null ? <p>N/A</p> :
            <div>
                {result.min_first_miles} + ${result.min_first_tax}
            </div>}
        <p className="text-xs">Min First Miles</p>
      </div>
    </div>
  );
};

export default FlightCard;