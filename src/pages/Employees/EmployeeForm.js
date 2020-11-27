import { Grid } from "@material-ui/core";
import React from "react";
import { Controls } from "../../components/controls/Controls";
import { useForms, Forms } from "../../components/useForms";
import * as employeeService from "./../../Services/employeeService";
const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  ispermanent: false,
};
const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];
const EmployeeForm = () => {
  const { values, setValues, handleInputChange } = useForms(initialFValues);
  console.log(values.ispermanent);
  return (
    <Forms>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Full Name"
            value={values.fullName}
            name="fullName"
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Email"
            value={values.email}
            name="email"
            onChange={handleInputChange}
          />

          <Controls.Input
            label="Mobile"
            value={values.mobile}
            name="mobile"
            onChange={handleInputChange}
          />

          <Controls.Input
            label="City"
            value={values.city}
            name="city"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            items={genderItems}
            onChange={handleInputChange}
          />
          <Controls.Select
            name="departmentId"
            value={values.departmentId}
            onChange={handleInputChange}
            label="Department"
            options={employeeService.getDepartmentCollection()}
          />

          <Controls.DatePicker
            name="hireDate"
            value={values.hireDate}
            onChange={handleInputChange}
            label="Hire Date"
          />
          <Controls.CheckBox
            name="ispermanent"
            value={values.ispermanent}
            onChange={handleInputChange}
            label="Permanent Employee"
          />

          <div>
            <Controls.Button text="Submit" type="submit" />
            <Controls.Button text="Reset" color="default" />
          </div>
        </Grid>
      </Grid>
    </Forms>
  );
};

export default EmployeeForm;
