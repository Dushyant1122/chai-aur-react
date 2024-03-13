// import "./App.css";
// import { Country, State } from "country-state-city";

// function App() {
//   const countries = Country.getAllCountries();
//   const states = State.getStatesOfCountry("IN")
//   console.log(states);
//   return (
//     <>
//       <select>
//         {countries.map((country, index) => (
//           <option key={index} value={country.name}>
//             {country.name}
//           </option>
//         ))}
//       </select>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import { Country, State, City } from "country-state-city";

// function App() {
//   const countries = Country.getAllCountries();
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [selectedState, setSelectedState] = useState("");
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);

//   const handleCountryChange = (event) => {
//     const countryCode = event.target.value;
//     setSelectedCountry(countryCode);
//     const countryStates = State.getStatesOfCountry(countryCode);
//     setStates(countryStates);
//     setSelectedState("");
//     setCities([]);
//   };

//   const handleStateChange = (event) => {
//     const stateCode = event.target.value;
//     setSelectedState(stateCode);
//     const stateCities = City.getCitiesOfState(countryCode,stateCode);
//     setCities(stateCities);
//   };
//   console.log(City.getCitiesOfState("IN", "RJ"));
//   return (
//     <>
//       <div>
//         <label htmlFor="country">Select Country:</label>
//         <select
//           id="country"
//           value={selectedCountry}
//           onChange={handleCountryChange}
//         >
//           <option value="">-- Select Country --</option>
//           {countries.map((country, index) => (
//             <option key={index} value={country.isoCode}>
//               {country.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {selectedCountry && (
//         <div>
//           <label htmlFor="state">Select State:</label>
//           <select id="state" value={selectedState} onChange={handleStateChange}>
//             <option value="">-- Select State --</option>
//             {states.map((state, index) => (
//               <option key={index} value={state.isoCode}>
//                 {state.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       {selectedState && (
//         <div>
//           <label htmlFor="city">Select City:</label>
//           <select id="city">
//             {cities.map((city, index) => (
//               <option key={index} value={city.name}>
//                 {city.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;

// import  { useState } from "react";
// import { Country, State, City } from "country-state-city";

// function App() {
//   const countries = Country.getAllCountries();
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [selectedState, setSelectedState] = useState("");
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);

//   const handleCountryChange = (event) => {
//     const countryCode = event.target.value;
//     setSelectedCountry(countryCode);
//     const countryStates = State.getStatesOfCountry(countryCode);
//     setStates(countryStates);
//     setSelectedState("");
//     setCities([]);
//   };

//   const handleStateChange = (event) => {
//     const stateCode = event.target.value;
//     setSelectedState(stateCode);
//     // const countryStates = State.getStatesOfCountry(selectedCountry); // Get country code from state
//     const stateCities = City.getCitiesOfState(selectedCountry, stateCode); // Pass both countryCode and stateCode
//     setCities(stateCities);
//   };

//   return (
//     <>
//       <div>
//         <label htmlFor="country">Select Country:</label>
//         <select
//           id="country"
//           value={selectedCountry}
//           onChange={handleCountryChange}
//         >
//           <option value="">-- Select Country --</option>
//           {countries.map((country, index) => (
//             <option key={index} value={country.isoCode}>
//               {country.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {selectedCountry && (
//         <div>
//           <label htmlFor="state">Select State:</label>
//           <select id="state" value={selectedState} onChange={handleStateChange}>
//             <option value="">-- Select State --</option>
//             {states.map((state, index) => (
//               <option key={index} value={state.isoCode}>
//                 {state.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       {selectedState && (
//         <div>
//           <label htmlFor="city">Select City:</label>
//           <select id="city">
//             {cities.map((city, index) => (
//               <option key={index} value={city.name}>
//                 {city.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import { Country, State, City } from "country-state-city";

// function App() {
//   const countries = Country.getAllCountries();
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [selectedState, setSelectedState] = useState("");
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [countryDialCode, setCountryDialCode] = useState(""); // State variable to store country dial code

//   const handleCountryChange = (event) => {
//     const countryCode = event.target.value;
//     setSelectedCountry(countryCode);
//     const countryStates = State.getStatesOfCountry(countryCode);
//     setStates(countryStates);
//     setSelectedState("");
//     setCities([]);
//     const countryData = Country.getCountryByCode(countryCode);
//     setCountryDialCode(countryData?.dialCode || ""); // Set the country dial code
//   };

//   const handleStateChange = (event) => {
//     const stateCode = event.target.value;
//     setSelectedState(stateCode);
//     const stateCities = City.getCitiesOfState(selectedCountry, stateCode);
//     setCities(stateCities);
//   };

//   const handleMobileNumberChange = (event) => {
//     setMobileNumber(event.target.value);
//   };

//   return (
//     <>
//       <div>
//         <label htmlFor="country">Select Country:</label>
//         <select
//           id="country"
//           value={selectedCountry}
//           onChange={handleCountryChange}
//         >
//           <option value="">-- Select Country --</option>
//           {countries.map((country, index) => (
//             <option key={index} value={country.isoCode}>
//               {country.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {selectedCountry && (
//         <div>
//           <label htmlFor="state">Select State:</label>
//           <select id="state" value={selectedState} onChange={handleStateChange}>
//             <option value="">-- Select State --</option>
//             {states.map((state, index) => (
//               <option key={index} value={state.isoCode}>
//                 {state.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       {selectedState && (
//         <div>
//           <label htmlFor="city">Select City:</label>
//           <select id="city">
//             {cities.map((city, index) => (
//               <option key={index} value={city.name}>
//                 {city.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       {selectedCountry && (
//         <div>
//           <label htmlFor="mobileNumber">Enter Mobile Number:</label>
//           <input
//             type="text"
//             id="mobileNumber"
//             value={mobileNumber}
//             onChange={handleMobileNumberChange}
//             placeholder={`+${countryDialCode}`} // Display country dial code as a placeholder
//           />
//         </div>
//       )}
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import { Country, State, City } from "country-state-city";

function App() {
  const countries = Country.getAllCountries();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [mobileNumber, setMobileNumber] = useState("");
  const [countryDialCode, setCountryDialCode] = useState("");
  const [stateDisabled, setStateDisabled] = useState(true);
  const [cityDisabled, setCityDisabled] = useState(true);

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);
    const countryStates = State.getStatesOfCountry(countryCode);
    setStates(countryStates);
    setSelectedState("");
    setCities([]);
    const countryData = Country.getCountryByCode(countryCode);
    setCountryDialCode(countryData?.phonecode || "");
    setStateDisabled(false);
    setCityDisabled(true);
  };

  const handleStateChange = (event) => {
    const stateCode = event.target.value;
    setSelectedState(stateCode);
    const stateCities = City.getCitiesOfState(selectedCountry, stateCode);
    setCities(stateCities);
    setCityDisabled(false);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col mb-4">
        <label htmlFor="country" className="mb-2">
          Select Country:
        </label>
        <select
          id="country"
          value={selectedCountry}
          onChange={handleCountryChange}
          className="p-2 border rounded"
        >
          <option value="">-- Select Country --</option>
          {countries.map((country, index) => (
            <option key={index} value={country.isoCode}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="state" className="mb-2">
          Select State:
        </label>
        <select
          id="state"
          value={selectedState}
          onChange={handleStateChange}
          disabled={stateDisabled}
          className="p-2 border rounded"
        >
          <option value="">-- Select State --</option>
          {states.map((state, index) => (
            <option key={index} value={state.isoCode}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="city" className="mb-2">
          Select City:
        </label>
        <select
          id="city"
          disabled={cityDisabled}
          className="p-2 border rounded"
        >
          {cities.map((city, index) => (
            <option key={index} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="mobileNumber" className="mb-2">
          Enter Mobile Number:
        </label>
        <input
          type="text"
          id="mobileNumber"
          value={mobileNumber}
          onChange={handleMobileNumberChange}
          placeholder={`+${countryDialCode}`}
          className="p-2 border rounded"
        />
      </div>
    </div>
  );
}

export default App;
