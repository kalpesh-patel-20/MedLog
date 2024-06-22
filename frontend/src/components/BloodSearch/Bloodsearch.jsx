import React, { useRef, useState } from "react";
import "./Bloodsearch.css";

function BloodSearch() {

  const [searchResults, setSearchResults] = useState([]);

  const bloodGroup = useRef();
  const taluka = useRef();
  const district = useRef();

  const handleSearch = async (e) => {
    e.preventDefault();

    const queryParams = {
      bloodGroup: bloodGroup.current.value,
      taluka: taluka.current.value,
      district: district.current.value,
    };
    console.log(queryParams);

    const apiUrl = "/api/v1/Patient-Tracker/Patient/bloodSearch";
    const queryString = new URLSearchParams(queryParams).toString();
    const fullUrl = `${apiUrl}?${queryString}`;
    console.log(fullUrl);
    try {
      const response = await fetch(fullUrl)
        .then((res) => res.json())
        .then((res) => {
          console.log("Result:", res);
          setSearchResults(res.Information);
        });
     
    } catch (error) {
      console.error("Blood Search error:", error);
    }

  };

  return (
    <>
      <div className="blood-search-container">
        <h2>Find Blood</h2>
        <form onSubmit={handleSearch}>
          <div>
            <label for="bloodGroup">Select your blood group:</label>
            <select ref={bloodGroup} id="bloodGroup" name="bloodGroup" required>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div>
            <label>Taluka:</label>
            <input
              ref={taluka}
              type="text"
              required
            />
          </div>
          <div>
            <label>District:</label>
            <input
              ref={district}
              type="text"
              required
            />
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="patient-list">
        <h3>Blood Matchers</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((patient, index) => (
              <tr key={index}>
                <td>{patient.name}</td>
                <td>{patient.contactNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BloodSearch;
