// import { useState, useEffect } from "react";
// import {useNavigate} from 'react-router-dom'
// import { useAddNewEmployeeMutation } from "../../features/employees/employeesApiSlice";
import { useGetStatesQuery } from "../../features/datas/statesApiSlice";
import { CreateForm, FieldSet } from "./index.styles";
import { DatePicker, Space } from "antd";
import OptionDepartments from "../Options/optionsDepartments";
import OptionsStates from "../Options/optionStates";

// const NAME_REGEX = /^[A-z]{3,20}$/;

export const AddEmployee = () => {
  // const [addNewEmployee, { isLoading, isSuccess, isError, error }] =
  //   useAddNewEmployeeMutation();

  // const navigate = useNavigate()

  const { data: states, isLoading, isSuccess, isError, error  } = useGetStatesQuery();

  let content;
  if (isLoading)
    content = (
      <p className="text-center p-5 fs-1">
        <b>Be patient, datas are coming...</b>
      </p>
    );

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = states || {};

    const optionsStates = ids?.length ? <OptionsStates /> : null;

    const onChange = (date, dateString) => {
      console.log(dateString);
    };
    content = (
      <CreateForm action="#" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" />

        <label htmlFor="start-date">Start Date</label>
        <Space
          direction="vertical"
          style={{
            width: "100%",
          }}
        >
          <DatePicker onChange={onChange} />
        </Space>

        <FieldSet className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" />

          <label htmlFor="city">City</label>
          <input id="city" type="text" />

          <label htmlFor="state">State</label>
          <select name="state" id="state" >
            {optionsStates}
          </select>

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </FieldSet>

        <label htmlFor="department">Department</label>
        <select name="department" id="department"  placeholder="Choose a department" aria-expanded='true'
                        aria-owns='department'
                        aria-controls='department'
                        aria-activedescendant="">
          <OptionDepartments />
        </select>
      </CreateForm>
    );
  }
  return content;
};
