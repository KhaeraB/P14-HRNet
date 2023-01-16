
import { ButtonSubmit } from "../Home/index.styles";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAddNewEmployeeMutation } from "../../features/employees/employeesApiSlice";
import { useGetStatesQuery } from "../../features/datas/statesApiSlice";
import { CreateForm, FieldSet } from "./index.styles";
import { DatePicker} from "antd";
import OptionsStates from "../Options/optionStates";
import {ValidationModal} from "../Modal/modal";
import { useGetDepartmentsQuery } from "../../features/datas/departmentsApiSlice";
import OptionsDept from "../Options/optionDepartments";

const NAME_REGEX = /^[A-z]{3,20}$/;

export const AddEmployee = () => {
  const [addNewEmployee, { isLoading, isSuccess, isError, error }] =
    useAddNewEmployeeMutation();
  const { data: states } = useGetStatesQuery();
  const { data: departments } = useGetDepartmentsQuery();

  const { ids } = states || departments || {};
  // const { deptIds } = ;
  const optionsStates = ids?.length ? <OptionsStates /> : null;
  const optionsDept = ids?.length ? <OptionsDept /> : null;
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
  const [department, setDepartmentEmployees] = useState("");
  const [show, setShow] = useState(false)

  useEffect(() => {
    setValidName(NAME_REGEX.test(firstName));
    setValidName(NAME_REGEX.test(lastName));
    setValidName(NAME_REGEX.test(birthDate));
    setValidName(NAME_REGEX.test(startDate));
    setValidName(NAME_REGEX.test(street));
    setValidName(NAME_REGEX.test(city));
    setValidName(NAME_REGEX.test(zipCode));
    setValidName(NAME_REGEX.test(state));
    setValidName(NAME_REGEX.test(department));
  }, [
    firstName,
    lastName,
    birthDate,
    startDate,
    street,
    city,
    zipCode,
    state,
    department,
  ]);

  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    }
  }, [isSuccess, show]);

  const onFirstNameChanged = (e) => setFirstName(e.target.value);

  const onLastNameChanged = (e) => setLastName(e.target.value);

  const onBirthDayChanged = (e) =>
    setBirthDate(new Date(e).toLocaleDateString("fr"));

  const onStartDateChanged = (e) =>
    setStartDate(new Date(e).toLocaleDateString("fr"));

  const onStreetChanged = (e) => setStreet(e.target.value);

  const onCityChanged = (e) => setCity(e.target.value);

  const onZipCodeChanged = (e) => setZipCode(e.target.value);

  const onDeptChanged = (e) => {
    e.preventDefault();
    const values = Array.from(
      e.target.selectedOptions, //HTMLCollection
      (option) => option.value
    );
    setDepartmentEmployees(values.toString());
  };

  const onStateChanged = (e) => {
    e.preventDefault();
    const value = Array.from(
      e.target.selectedOptions, //HTMLCollection
      (option) => option.value
    );
    setState(value.toString());
  };

  const canSave = [validName].every(Boolean) && !isLoading;


  const handleSubmit = async (e) => {
    e.preventDefault();

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
        department,
      });
    } 
  };

  const errClass = isError ? "errmsg" : "offscreen";
  const validStringClass = !validName ? "form__input--incomplete" : "";
  const validDepartmentClass = !Boolean(department.length)
    ? "form__input--incomplete"
    : "";


   
  const content = (
    <>
      <p className={errClass}>{error?.data?.message}</p>
      <CreateForm className="form" onSubmit={handleSubmit}>
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
        <DatePicker
          onChange={onBirthDayChanged}
          className={`form__input ${validStringClass}`}
        />

        <label htmlFor="start-date">Start Date</label>
        <DatePicker
          onChange={onStartDateChanged}
          className={`form__input ${validStringClass}`}
        />

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
          value={department}
          onChange={onDeptChanged}
        >
          <option value="" disabled>
            Select your Department
          </option>
          {optionsDept}
        </select>

        <ButtonSubmit type="submit" value="Save" disabled={!canSave} onClick={handleShow}/>

        {show=== true ? <ValidationModal show={show} onHide={()=> setShow(false)} backdrop="static" title="Success" body="New Employee Create !" keyboard={false} />: null}
      
      </CreateForm>
    </>
  );
  return content;
};