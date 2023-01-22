import { useState } from "react";
import { Button, DatePicker, Divider, Form, Input, InputNumber, Select } from "antd";
import { useAddNewEmployeeMutation } from "../../features/employees/employeesApiSlice";
import {
  selectAllStates,
  useGetStatesQuery,
} from "../../features/datas/statesApiSlice";
import {
  selectAllDepartments,
  useGetDepartmentsQuery,
} from "../../features/datas/departmentsApiSlice";

import Modale from "ui-modale-kb";
import { useSelector } from "react-redux";

const { Option } = Select;
/**
 * Description : Form to Add Employee 
 * @returns {form, addNewEmployee}
 */
export const AddEmployee = () => {
  // Data
  const [addNewEmployee, { isSuccess }] = useAddNewEmployeeMutation();
  const { data: states } = useGetStatesQuery();
  const { data: departments } = useGetDepartmentsQuery();
  const { ids } = states || departments || {};
  const deptData = useSelector((state) => selectAllDepartments(state, ids));
  const statesData = useSelector((state) => selectAllStates(state, ids));
  //Form
  const [form] = Form.useForm();
  //State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartmentEmployees] = useState("");

  // Modale
  const [displayModale, setDisplayModale] = useState(false);

  //OnChange values
  const onFirstNameChanged = (e) => setFirstName(e.target.value);

  const onLastNameChanged = (e) => setLastName(e.target.value);

  const onBirthDayChanged = (e) =>
    setBirthDate(new Date(e).toLocaleDateString("fr"));

  const onStartDateChanged = (e) =>
    setStartDate(new Date(e).toLocaleDateString("fr"));

  const onStreetChanged = (e) => setStreet(e.target.value);

  const onCityChanged = (e) => setCity(e.target.value);

  const onZipCodeChanged = (e) => setZipCode(e.toString());

  const onDeptChanged = (e) => {
    setDepartmentEmployees(e);
  };

  const onStateChanged = (e) => {
    setState(e);
  };

  //HandleSubmit
  const handleSubmit = async (e) => {
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
    setDisplayModale(true);
    form.resetFields();
  };

  const content = (
    <>
      <Form form={form} autoComplete="off" onFinish={handleSubmit}>
        <Form.Item
          labelCol={{ span: 24 }}
          style={{ marginBottom: "12px" }}
          label="First Name"
          name="firstName"
          htmlFor="firstName"
          rules={[
            { required: true, message: "Please enter the first name" },
            { whitespace: true },
            { min: 2 },
          ]}
          hasFeedback
        >
          <Input
            placeholder="Type a first name"
            value={firstName}
            onChange={onFirstNameChanged}
            name="firstName"
          />
        </Form.Item>

        <Form.Item
          labelCol={{ span: 24 }}
          style={{ marginBottom: "12px" }}
          label="Last Name"
          name="lastName"
          htmlFor="lastName"
          rules={[
            { required: true, message: "Please enter the last name" },
            { whitespace: true },
            { min: 2 },
          ]}
          hasFeedback
        >
          <Input
            placeholder="Type a last name"
            name="lastName"
            value={lastName}
            onChange={onLastNameChanged}
          />
        </Form.Item>

        <Form.Item
          labelCol={{ span: 24 }}
          style={{ marginBottom: "12px" }}
          label="Date of Birth"
          name="birthdate"
          htmlFor="birthdate"
          rules={[{ required: true, message: "Please enter a date of birth" }]}
        >
          <DatePicker
            style={{ width: "100%" }}
            picker="date"
            format="DD/MM/YYYY"
            name="birthDate"
            onChange={onBirthDayChanged}
          />
        </Form.Item>

        <Form.Item
          labelCol={{ span: 24 }}
          style={{ marginBottom: "12px" }}
          label="Date of start"
          name="startDate"
          htmlFor="startDate"
          rules={[{ required: true, message: "Please enter a date" }]}
        >
          <DatePicker
            style={{ width: "100%" }}
            picker="date"
            format="DD/MM/YYYY"
            name="startDate"
            onChange={onStartDateChanged}
          />
        </Form.Item>

        <Divider
          style={{
            border: "#6cad09",
            color: "#6cad09",
            fontSize: "16px",
            fontWeight: "700",
            marginTop: "20px",
            marginBottom: "20px",
          }}
          orientation="center"
        >
          Address
        </Divider>

        <Form.Item
          labelCol={{ span: 24 }}
          style={{ marginBottom: "12px" }}
          label="Street"
          name="street"
          htmlFor="street"
          rules={[
            { required: true, message: "Please enter the street" },
            { whitespace: true },
            { min: 2 },
          ]}
          hasFeedback
        >
          <Input
            placeholder="Type a street"
            name="street"
            value={street}
            onChange={onStreetChanged}
          />
        </Form.Item>

        <Form.Item
          labelCol={{ span: 24 }}
          style={{ marginBottom: "12px" }}
          label="City"
          name="city"
          htmlFor="city"
          rules={[
            { required: true, message: "Please enter the city" },
            { whitespace: true },
            { min: 2 },
          ]}
          hasFeedback
        >
          <Input
            placeholder="Type a city"
            name="city"
            value={city}
            onChange={onCityChanged}
          />
        </Form.Item>

        <Form.Item
          labelCol={{ span: 24 }}
          style={{ marginBottom: "12px" }}
          label="State"
          name="state"
          htmlFor="state"
          rules={[{ required: true, message: "Select a state" }]}
        >
          <Select
            placeholder="Select a State"
            allowClear
            name="state"
            aria-label="select a state"
            aria-expanded="true"
            aria-owns="state"
            aria-controls="state"
            aria-activedescendant=""
            value={state}
            onChange={onStateChanged}
          >
            {statesData.map((state) => (
              <Option value={state.name} key={state.abbreviation}>
                {state.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          labelCol={{ span: 24 }}
          style={{ marginBottom: "12px" }}
          label="Zip Code"
          name="zipCode"
          htmlFor="zipcode"
          rules={[
            {
              required: true,
              message: "Add a zip code",
            },
          ]}
        >
          <InputNumber
            style={{ width: "100%" }}
            placeholder="Add zip code"
            name="zipcode"
            value={zipCode}
            onChange={onZipCodeChanged}
          />
        </Form.Item>

        <Divider
          orientation="center"
          style={{
            border: "#6cad09",
            color: "#6cad09",
            fontSize: "16px",
            fontWeight: "700",
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          Department
        </Divider>

        <Form.Item
          labelCol={{ span: 24 }}
          style={{ marginBottom: "12px" }}
          label="Department"
          wrapperCol={{ span: 24 }}
          name="department"
          htmlFor="department"
          rules={[{ required: true, message: "Select a department" }]}
        >
          <Select
            placeholder="Select a department"
            name="department"
            aria-expanded="true"
            aria-owns="department"
            aria-controls="department"
            aria-activedescendant=""
            value={department}
            onChange={onDeptChanged}
          >
            {deptData.map((department) => (
              <Option value={department.name} key={department.id}>
                {department.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          labelCol={{ span: 24 }}
          style={{ marginBottom: "12px" }}
          wrapperCol={{ span: 24 }}
        >
          <Button
            block
            style={{ background: "#6cad09", padding:"22px 0", lineHeight:0, fontSize:"15px", color: "white", width: "100%" }}
            htmlType="submit"
          >
            Save
          </Button>
        </Form.Item>

        {isSuccess ? (
          <Modale
            title="Success"
            content="New employee created !"
            displayModale={displayModale}
            onHide={() => setDisplayModale(false)}
          />
        ) : (
          <Modale
            title="Oups !"
            content="Failed to create a new employee !"
            displayModale={displayModale}
            onHide={() => setDisplayModale(false)}
          />
        )}
      </Form>
    </>
  );
  return content;
};
