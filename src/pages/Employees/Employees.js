import React from "react";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/PageHeader";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));
const Employees = () => {
  const classes = useStyles();
  return (
    <>
      <PageHeader
        icon={<PeopleOutlineIcon fontSize="large" />}
        title="New Employee"
        subtitle="Form design with validations"
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
};

export default Employees;
