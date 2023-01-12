import { ButtonSubmit } from "../Home/index.styles";
// import { useNavigate } from "react-router-dom";
import { useAddNewEmployeeMutation } from "../../features/employees/employeesApiSlice";
import { useGetStatesQuery } from "../../features/datas/statesApiSlice";
import { CreateForm, FieldSet } from "./index.styles";
import { DatePicker } from "antd";
import { DEPARTMENTS } from "../../config/departments";
import OptionsStates from "../Options/optionStates";
import { useEffect, useState } from "react";

const NAME_REGEX = /^[A-z]{3,20}$/;

export const AddEmployee = () => {
  const [addNewEmployee, { isLoading, isSuccess, isError, error }] =
    useAddNewEmployeeMutation();

  const { data: states } = useGetStatesQuery();

  const { ids } = states || {};

  const optionsStates = ids?.length ? <OptionsStates /> : null;

  // const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [validName, setValidName] = useState(false);
  const [departmentsEmployees, setDepartmentEmployees] = useState("");

  useEffect(() => {
    setValidName(NAME_REGEX.test(firstName));
    setValidName(NAME_REGEX.test(lastName));
    setValidName(NAME_REGEX.test(birthDate));
    setValidName(NAME_REGEX.test(startDate));
    setValidName(NAME_REGEX.test(street));
    setValidName(NAME_REGEX.test(city));
    setValidName(NAME_REGEX.test(zipCode));
    setValidName(NAME_REGEX.test(state));
    setValidName(NAME_REGEX.test(departmentsEmployees));
  }, [
    firstName,
    lastName,
    birthDate,
    startDate,
    street,
    city,
    zipCode,
    state,
    departmentsEmployees,
  ]);

  const modal = (message) => {
    return (
      <div
        className="modal fade"
        id="modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{message}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  useEffect(() => {
    if (isSuccess) {
      setFirstName("");
      setLastName("");
      setBirthDate("");
      setStartDate("");
      setStreet("");
      setCity("");
      setZipCode("");
      setState("");
      setDepartmentEmployees("");
      modal("New Employee Created!");
    }else{
      modal("Fail to Create New Employee");
    }
  }, [isSuccess]);

  const onFirstNameChanged = (e) => setFirstName(e.target.value);

  const onLastNameChanged = (e) => setLastName(e.target.value);

  const onBirthDayChanged = (dateString) =>
    setBirthDate(new Date(dateString).toLocaleDateString("fr"));

  const onStartDateChanged = (dateString) =>
    setStartDate(new Date(dateString).toLocaleDateString("fr"));

  const onStreetChanged = (e) => setStreet(e.target.value);

  const onCityChanged = (e) => setCity(e.target.value);

  const onZipCodeChanged = (e) => setZipCode(e.target.value);

  const onDeptChanged = (e) => {
    e.preventDefault();
    const values = Array.from(
      e.target.selectedOptions, //HTMLCollection
      (option) => option.value
    );
    setDepartmentEmployees(values);
  };

  const onStateChanged = (e) => {
    e.preventDefault();
    const value = Array.from(
      e.target.selectedOptions, //HTMLCollection
      (option) => option.value
    );
    setState(value);
  };

  const canSave = [validName].every(Boolean) && !isLoading;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(canSave)
    if (canSave) {
     
      await addNewEmployee({
        firstName,
        lastName,
        birthDate,
        startDate,
        street,
        city,
        zipCode,
        state,
        departmentsEmployees,
      });
    }
  };

  const optionsDepartments = DEPARTMENTS.map((department) => {
    return (
      <option key={department.id} value={department.name}>
        {" "}
        {department.name}
      </option>
    );
  });

  const errClass = isError ? "errmsg" : "offscreen";
  const validStringClass = !validName ? "form__input--incomplete" : "";
  const validDepartmentClass = !Boolean(departmentsEmployees.length)
    ? "form__input--incomplete"
    : "";

  const content = (
    <>
      <p className={errClass}>{error?.data?.message}</p>
      <CreateForm id="create-employee" onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>

        <input
          type="text"
          id="last-name"
          className={`form__input ${validStringClass}`}
          name="firstName"
          value={firstName}
          onChange={onFirstNameChanged}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="first-name"
          className={`form__input ${validStringClass}`}
          name="lastName"
          value={lastName}
          onChange={onLastNameChanged}
        />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker onChange={onBirthDayChanged} />

        <label htmlFor="start-date">Start Date</label>
        <DatePicker onChange={onStartDateChanged} />

        <FieldSet className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            className={`form__input ${validStringClass}`}
            name="street"
            value={street}
            onChange={onStreetChanged}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            className={`form__input ${validStringClass}`}
            name="city"
            value={city}
            onChange={onCityChanged}
          />

          <label htmlFor="state">State</label>
          <select
            name="state"
            id="state"
            className={`empty form__select ${validDepartmentClass}`}
            value={state}
            onChange={onStateChanged}
          >
            <option value="" disabled>
              Select your State
            </option>
            {optionsStates}
          </select>

          <label htmlFor="zip-code">Zip Code</label>
          <input
            id="zip-code"
            type="text"
            className={`form__input ${validStringClass}`}
            name="zipCode"
            value={zipCode}
            onChange={onZipCodeChanged}
          />
        </FieldSet>

        <label htmlFor="department">Department</label>
        <select
          name="department"
          id="department"
          className={`empty form__select ${validDepartmentClass}`}
          value={departmentsEmployees}
          onChange={onDeptChanged}
        >
          <option value="" disabled>
            Select your Department
          </option>
          {optionsDepartments}
        </select>
      </CreateForm>
      <ButtonSubmit type="submit" value="Save" disabled={!canSave} />
     
    </>
  );

  return content;
};
