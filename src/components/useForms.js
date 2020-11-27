import { makeStyles } from "@material-ui/core";
import React, { Children } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export const useForms = (initialFValues) => {
  const [values, setValues] = React.useState(initialFValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return { values, setValues, handleInputChange };
};

export const Forms = ({ children }) => {
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete="off">
      {children}
    </form>
  );
};
