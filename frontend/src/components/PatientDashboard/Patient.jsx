import React, { useState, useEffect } from "react";
import "./Patient.css";
import Profile from "../../assets/Profile.png";
import { format } from "date-fns"; 

let data;

function Patient() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          "/api/v1/Patient-Tracker/Patient/ReadMedicalData",
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (response.ok) {
          data = await response.json();
          setUserDetails(data.patientInformation);
        } else {
          console.error("Failed to fetch user details:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  // Function to format date and time
  const formatDate = (dateString) => {
    return format(new Date(dateString), "dd MMM yyyy HH:mm:ss");
  };

  return (
    <div>
      <div className="app-container">
        <div className="sidebar">
          <div className="sidebar-header">
            <div id="profile">
              <img src={Profile} alt="profile" />
            </div>
          </div>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <p id="pn">{userDetails?.name}</p>
            </li>
            <li className="sidebar-list-items">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <p>
                  Blood Group :<span> {userDetails?.bloodGroup}</span>
                </p>
              </a>
            </li>
            <li className="sidebar-list-items">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <p>
                  Gender :<span> {userDetails?.gender}</span>
                </p>
              </a>
            </li>
          </ul>
        </div>

        <div className="app-content">
          <div className="app-content-header">
            <h1 className="app-content-headerText">Patient History</h1>
          </div>

          <div className="disease-wrapper tableView">
            <div className="disease-header">
              <div className="disease-cell image">Disease</div>
              <div className="disease-cell category">
                Date<button className="sort-button"></button>
              </div>
              <div className="disease-cell status-cell">
                Diagnosed By Doctor<button className="sort-button"></button>
              </div>
              <div className="disease-cell sales">
                Diagnosed By Hospital<button className="sort-button"></button>
              </div>
              <div className="disease-cell stock">
                Download File<button className="sort-button"></button>
              </div>
            </div>

            {userDetails &&
              userDetails.MedicalData &&
              userDetails.MedicalData.map((disease, index) => (
                <div className="disease-row" key={index}>
                  <div className="disease-cell image">
                    <span>{disease.diseaseDescription}</span>
                  </div>
                  <div className="disease-cell category">
                    <span>{formatDate(disease.Date)}</span>{" "}
                    {/* Format Date field */}
                  </div>
                  <div className="disease-cell sales">
                    <span>{disease.diagonsedByDoctor}</span>
                  </div>
                  <div className="disease-cell stock">
                    <span>{disease.diagonsedByHospital}</span>
                  </div>
                  <div className="disease-cell price">
                    <span>
                      <a href={disease.fileurl} download>
                        <svg
                          id="download"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-download"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patient;
