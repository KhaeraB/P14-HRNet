import { ButtonSubmit } from "../Home/index.styles";
import { useNavigate } from "react-router-dom";
import { useAddNewEmployeeMutation } from "../../features/employees/employeesApiSlice";
import { useGetStatesQuery } from "../../features/datas/statesApiSlice";
import { CreateForm, FieldSet } from "./index.styles";
import { DatePicker } from "antd";
import { DEPARTMENTS } from "../../config/departments";
import OptionsStates from "../Options/optionStates";
import { useEffect, useState } from "react";

const NAME_REGEX = /^[A-z]{3,20}$/;
const DATE_REGEX = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/;

export const AddEmployee = () => {
  const { data: states } = useGetStatesQuery();
  let content;

  const { ids } = states || {};

  const optionsStates = ids?.length ? <OptionsStates /> : null;

  const [addNewEmployee, { isLoading, isSuccess, isError, error }] =
    useAddNewEmployeeMutation();

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDatee, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [validName, setValidName] = useState(false);
  const [validDate, setValidDate] = useState(false);
  const [departmentsEmployees, setDepartmentEmployees] = useState("");

  useEffect(() => {
    setValidName(NAME_REGEX.test(firstName));
    setValidName(NAME_REGEX.test(lastName));
    setValidName(NAME_REGEX.test(street));
    setValidName(NAME_REGEX.test(city));
    setValidName(NAME_REGEX.test(zipCode));
    setValidName(NAME_REGEX.test(state));
    setValidName(NAME_REGEX.test(departmentsEmployees));
  }, [
    firstName,
    lastName,
    birthDatee,
    startDate,
    street,
    city,
    zipCode,
    state,
    departmentsEmployees,
  ]);

  useEffect(() => {
    setValidDate(DATE_REGEX.test(birthDatee));
    setValidDate(DATE_REGEX.test(startDate));
  }, [birthDatee, startDate]);

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
      navigate("/");
    }
  }, [isSuccess, navigate]);

  const onFirstNameChanged = (e) => setFirstName(e.target.value);
  const onLastNameChanged = (e) => setLastName(e.target.value);
  const onBirthDayChanged = (dateString) => setBirthDate(dateString);
  const onStartDateChanged = (dateString) => setStartDate(dateString);
  const onStreetChanged = (e) => setStreet(e.target.value);
  const onCityChanged = (e) => setCity(e.target.value);
  const onZipCodeChanged = (e) => setZipCode(e.target.value);

  const onDepartmentsChanged = (e) => {
    e.preventDefault()
    const values = Array.from(
      e.target.selectedOptions, //HTMLCollection
      (option) => option.value
    );
    console.log(values)
    setDepartmentEmployees(values);
  };

  const onStateChanged = (e) => {
    e.preventDefault()
    const value = Array.from(
      e.target.selectedOptions, //HTMLCollection
      (option) => option.value
    );
    console.log(value)
    setState(value);
  };

  const canSave =
    [departmentsEmployees.length, validName, validDate].every(Boolean) &&
    !isLoading;

  const optionsDepartments = DEPARTMENTS.map((department) => {
    return (
      <option key={department.id} value={department.value}>
        {" "}
        {department.name}
      </option>
    );
  });
  
  const onClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
      await addNewEmployee({
        firstName,
        lastName,
        birthDatee,
        startDate,
        street,
        city,
        zipCode,
        state,
        departmentsEmployees,
      });
    }
  };

  const errClass = isError ? "errmsg" : "offscreen";
  const validStringClass = !validName ? "form__input--incomplete" : "";
  const validDepartmentClass = !Boolean(departmentsEmployees.length)
    ? "form__input--incomplete"
    : "";

  content = (
    <>
      <p className={errClass}>{error?.data?.message}</p>
      <CreateForm action="#" id="create-employee" onSubmit={onClicked}>
        <label htmlFor="first-name">First Name</label>

        <input
          type="text"
          id="last-name"
          className={`form__input ${validStringClass}`}
          name="firstName"
          autoComplete="off"
          value={firstName}
          onChange={onFirstNameChanged}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="first-name"
          className={`form__input ${validStringClass}`}
          name="lastName"
          autoComplete="off"
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
            autoComplete="off"
            value={street}
            onChange={onStreetChanged}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            className={`form__input ${validStringClass}`}
            name="city"
            autoComplete="off"
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
            autoComplete="off"
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
          onChange={onDepartmentsChanged}
        >
          <option value=""  disabled>
            Select your Department
          </option>
          {optionsDepartments}
        </select>
      </CreateForm>
      <ButtonSubmit className="mt-2 btn border-0" title="Save">
        Save
      </ButtonSubmit>
    </>
  );

  return content;
};
