import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, memo } from "react";
import { Link } from "react-router-dom";
import validateSchema from "./validationSchema";
import { countries, states } from "../utils/";

const Form = ({ getData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validateSchema)
  });

  const savaData = (data) => {
    fetch("data/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(console.log())
      .catch((error) => console.log("error", error));
  };
  const [selectedCountry, setSelectedCountry] = useState({
    id: 101,
    name: "India",
    isoCode: "IN",
    dialCode: 91
  });

  const [selectedState, setSelectedState] = useState();
  const [availableState, setAvailableState] = useState();

  const handleSelectChange = (e) => {
    const country = countries.find(
      (country) => country.name === e.target.value
    );
    setSelectedCountry(country);
    const State = states.filter((c) => c.countryId === selectedCountry.id);
    setAvailableState(State);
  };

  const age = (birthdate) => {
    const today = new Date();
    const age =
      today.getFullYear() -
      birthdate.getFullYear() -
      (today.getMonth() < birthdate.getMonth() ||
        (today.getMonth() === birthdate.getMonth() &&
          today.getDate() < birthdate.getDate()));
    return age;
  };

  const submitHandler = (data) => {
    console.log(data);
    data.dob = age(data.dob);
    savaData(data);
    alert("user added successfully");
	getData();
  };

  const handleReset = (e) => {
    e.target.value = "";
  };

  return (
    <div>
      <Link to="/display">Display Data</Link>
      <form onSubmit={handleSubmit(submitHandler)}>
        {/* Personal Details */}
        <div className="form-row  form-personal-details">
          <h3>Personal Details</h3>
          <div className="form-row-content">
            <div className="form-row-input">
              <label>
                Name* :
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: "Required" })}
                  placeholder="Enter Name"
                />
              </label>
              <span className="form-input-error">{errors.name?.message}</span>
            </div>
            <div className="form-row-input">
              <label>
                Date of Birth or Age* :
                <input
                  type="date"
                  name="dob"
                  min="1900-05-11"
                  max="2005-05-20"
                  {...register("dob", { required: "Required" })}
                />
              </label>
              <span className="form-input-error">
                {errors.dob?.message && "date is required"}
              </span>
            </div>
            <div className="form-row-input">
              <label>
                Gender :
                <select
                  name="gender"
                  {...register("gender", { required: "Required" })}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <span className="form-input-error">{errors.gender?.message}</span>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-row-content">
            <div className="form-row-input">
              <label>
                Mobile :{" "}
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter Mobile"
                  {...register("mobile")}
                />
              </label>
              <span className="form-input-error">{errors.mobile?.message}</span>
            </div>
            <label>
              Govt ID :{" "}
              <select
                name="govIdType"
                {...register("govIdType", { required: "Required" })}
              >
                <option value="">ID Type </option>
                <option value="aadhar">Aadhar Card </option>
                <option value="pan">PAN Card</option>
              </select>
              {errors.govIdType?.message}
            </label>
            <label>
              <input
                name="govIdValue"
                placeholder="Enter Govt ID"
                {...register("govIdValue", { required: "Required" })}
              ></input>
              <span className="form-input-error">
                {errors.govIdValue?.message}
              </span>
            </label>
          </div>
        </div>

        {/* Contact Details */}
        <div className="form-row">
          <h3>Contact Details</h3>
          <div className="form-row-content">
            <label>
              Guardian Details :{" "}
              <select
                name="guardianLabel"
                {...register("guardianLabel", { required: "Required" })}
              >
                <option value="">Enter Label</option>
                <option value="mother">Mother </option>
                <option value="father">Father</option>
                <option value="brother">Brother</option>
              </select>
              {errors.guardianLabel?.message}
            </label>
            <label>
              <input
                name="guardianName"
                placeholder="Enter Guardian Name"
                {...register("guardianName")}
              ></input>
              <span className="form-input-error">
                {errors.guardianName?.message}
              </span>
            </label>
            <div className="form-row-input">
              <label>
                Email :{" "}
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  {...register("email")}
                />
              </label>
              <span className="form-input-error">{errors.email?.message}</span>
            </div>
            <div className="form-row-input">
              <label>
                Emergency Contact Number :{" "}
                <input
                  type="text"
                  name="emrgencyContactNo"
                  placeholder="Enter Emergency No."
                  {...register("emrgencyContactNo")}
                />
              </label>
              <span className="form-input-error">
                {errors.emrgencyContactNo?.message}
              </span>
            </div>
          </div>
        </div>

        {/* Address Details */}
        <div className="form-row">
          <h3>Address Details</h3>
          <div className="form-row-content">
            <div className="form-row-input">
              <label>
                Address :{" "}
                <input type="text" name="address" {...register("address")} />
              </label>
              {errors.address?.message}
            </div>
            <div className="form-row-input">
              <label>
                State :{" "}
                <select
                  name="state"
                  {...register("state", { required: "Required" })}
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  <option value="">Enter State</option>
                  {selectedCountry &&
                    availableState &&
                    availableState.map((state) => {
                      console.log(state);
                      return (
                        <option key={state.id} value={state.value}>
                          {state.name}
                        </option>
                      );
                    })}
                </select>
              </label>
              {errors.state?.message}
            </div>
            <div className="form-row-input">
              <label>
                City :{" "}
                <select
                  name="city"
                  {...register("city", { required: "Required" })}
                >
                  <option value="">Enter City</option>
                  <option value="mother">N/A </option>
                </select>
              </label>
              {errors.city?.message}
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-row-content">
            <div className="form-row-input">
              <label>
                Country :{" "}
                <select
                  name="country"
                  {...register("country")}
                  onChange={handleSelectChange}
                >
                  <option value="">Enter Country</option>
                  {countries.map((country) => {
                    return (
                      <option
                        value={country.name}
                        id={country.id}
                        key={country.id}
                      >
                        {country.name}
                      </option>
                    );
                  })}
                </select>
              </label>
              {errors.country?.message}
            </div>
            <div className="form-row-input">
              <label>
                Pincode :{" "}
                <input
                  type="text"
                  name="pincode"
                  placeholder="Enter Pincode"
                  {...register("pincode")}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="form-row">
          <h3>Other Details</h3>
          <div className="form-row-content">
            <div className="form-row-input">
              <label>
                Occupation :{" "}
                <input
                  name="occupation"
                  placeholder="Enter Occupation"
                  {...register("occupation")}
                />
              </label>
              <span className="form-input-error">
                {errors.occupation?.message}
              </span>
            </div>
            <div className="form-row-input">
              <label>
                Religion :{" "}
                <select name="religion" {...register("religion")}>
                  <option value="">Enter Religion</option>
                  <option value="Hindu">Hindu </option>
                  <option value="Muslim">Muslims</option>
                  <option value="Christian">Christian</option>
                  <option value="Sikh">Sikh</option>
                </select>
              </label>
              {errors.religion?.message}
            </div>
            <div className="form-row-input">
              <label>
                Marital Status :{" "}
                <select name="maritalStatus" {...register("city")}>
                  <option value="">Enter Marital Status</option>
                  <option value="Single">Single </option>
                  <option value="Married">Married</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Divorced">Divorced</option>
                </select>
              </label>
              {errors.maritalStatus?.message}
            </div>
            <div className="form-row-input">
              <label>
                Blood Group :{" "}
                <select name="bloodGroup" {...register("bloodGroup")}>
                  <option value="">Group</option>
                  <option value="A+">A+ </option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B- </option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </label>
              {errors.bloodGroup?.message}
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-row-input">
            <label>
              Nationality :{" "}
              <select name="nationality" {...register("nationality")}>
                <option value="">Enter Country</option>
                <option value="Indian">Indian </option>
              </select>
            </label>
            {errors.nationality?.message}
          </div>
        </div>
        <div className="form-control-action">
          <input type="submit" className="button-68" value="Submit" />
          <button
            type="reset"
            className="button-68 reset"
            value="Cancel"
            onClick={handleReset}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(Form);
