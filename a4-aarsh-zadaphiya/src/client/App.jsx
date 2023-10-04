import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";
  
  function BmiCalculator() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("male");
    const [bmi, setBmi] = useState("");
  
    const calculateBMI = () => {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    };
  
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <form id="bmiForm">
                <div className="mb-3 text-start">
                  <label className="form-label" htmlFor="height">
                    Height (cm)
                  </label>
                  <input
                    className="form-control text-start"
                    type="number"
                    id="height"
                    placeholder="Height (cm)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 text-start">
                  <label className="form-label" htmlFor="weight">
                    Weight (kg)
                  </label>
                  <input
                    className="form-control text-start"
                    type="number"
                    id="weight"
                    placeholder="Weight (kg)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <div className="mb-3 text-start">
                  <label className="form-label" htmlFor="age">
                    Age
                  </label>
                  <input
                    className="form-control text-start"
                    type="number"
                    id="age"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="Gender" className="form-label">
                    Gender
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      checked={gender === "male"}
                      onChange={() => setGender("male")}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      checked={gender === "female"}
                      onChange={() => setGender("female")}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    className="btn btn-success w-100"
                    type="button"
                    id="Calculate"
                    onClick={calculateBMI}
                  >
                    Calculate BMI
                  </button>
                </div>
              </form>
            </div>
          </div>
  
          <div className="col-md-6 font2">
            <div className="box d-inline-flex">
              <div className="py-5 px-5">
                <p>Your calculated BMI</p>
                <div className="alert alert-success">
                  <strong></strong> <span id="bmi">{bmi}</span>
                </div>
              </div>
  
              <div className="col-md-1"></div>
              <div className="px-5">
                <p>About BMI Criteria:</p>
                <p>Underweight = &lt;18.5</p>
                <p>Normal weight = 18.5–24.9</p>
                <p>Overweight = 25–29.9</p>
                <p>Obesity = BMI of 30 or greater</p>
              </div>
            </div>
  
            <div className="box">
              <table className="table my-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Height (cm)</th>
                    <th>Weight (kg)</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>BMI</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody id="entryTable"></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

  export default BmiCalculator;
