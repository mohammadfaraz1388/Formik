import { useFormik } from "formik";

const initialValues = {
  firstName: "",
  lastName: "",
  number: "",
  email: "",
  password: "",
};

function App() {
  const validate = (values) => {
    let errors = {};
    if (!values.firstName) {
      errors.firstName = "Firstname is REQUIRED!";
    }
    if (!values.lastName) {
      errors.lastName = "Lastname is REQUIRED!";
    }
    if (!values.number) {
      errors.number = "Number is REQUIRED!";
    }
    if (!values.email) {
      errors.email = "Email is REQUIRED!";
    }
    if (!values.password) {
      errors.password = "Password is REQUIRED!";
    }

    console.log(errors);
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => console.log(values),
    validate,
  });

  return (
    <>
      <div className="p-5">
        <h1 className="text-5xl font-bold ">Form</h1>
        <h3 className="text-2xl font-medium">Fill out the form below carefully!</h3>
        <form action="" onSubmit={formik.handleSubmit} className="mt-5">
          <input
            type="text"
            placeholder="Firstname"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            name="firstName"
          />
          {formik.errors.firstName && <p>{formik.errors.firstName}</p>}
          <input
            type="text"
            placeholder="Lastname"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            name="lastName"
          />
          {formik.errors.lastName && <p>{formik.errors.lastName}</p>}
          <input
            type="number"
            placeholder="Number"
            value={formik.values.number}
            onChange={formik.handleChange}
            name="number"
          />
          {formik.errors.number && <p>{formik.errors.number}</p>}
          <input
            type="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
          />
          {formik.errors.email && <p>{formik.errors.email}</p>}
          <input
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
          />
          {formik.errors.password && <p>{formik.errors.password}</p>}
          <input type="submit" />
        </form>
        <div className="mt-5">
          <ul>
            <li>Firstname = {formik.values.firstName}</li>
            <li>Lastname = {formik.values.lastName}</li>
            <li>Number = {formik.values.number}</li>
            <li>Email = {formik.values.email}</li>
            <li>Password = {formik.values.password}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
