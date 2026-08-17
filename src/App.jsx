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
      <div className="p-5 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold ">Form:</h1>
        <h3 className="text-2xl font-medium">
          Fill out the form below carefully!
        </h3>
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className="mt-5 flex flex-col gap-y-5 w-80"
        >
          <div>
            <label>Firstname : </label>
            <input
              type="text"
              placeholder="Faraz"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              name="firstName"
              className="focus:outline-0 placeholder:text-sky-500 text-sky-500"
            />
            {formik.errors.firstName && (
              <p className="text-rose-500">{formik.errors.firstName}</p>
            )}
          </div>
          <div>
            <label>Lastname : </label>
            <input
              type="text"
              placeholder="Emdadi"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              name="lastName"
              className="focus:outline-0 placeholder:text-sky-500 text-sky-500"
            />
            {formik.errors.lastName && (
              <p className="text-rose-500">{formik.errors.lastName}</p>
            )}
          </div>
          <div>
            <label>Number : </label>
            <input
              type="number"
              placeholder="9374802514"
              value={formik.values.number}
              onChange={formik.handleChange}
              name="number"
              className="focus:outline-0 placeholder:text-sky-500 text-sky-500"
            />
            {formik.errors.number && (
              <p className="text-rose-500">{formik.errors.number}</p>
            )}
          </div>
          <div>
            <label>Email : </label>
            <input
              type="email"
              placeholder="faraz1388@gmail.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              className="focus:outline-0 placeholder:text-sky-500 text-sky-500"
            />
            {formik.errors.email && (
              <p className="text-rose-500">{formik.errors.email}</p>
            )}
          </div>
          <div>
            <label>Passeord : </label>
            <input
              type="password"
              placeholder="12345678"
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              className="focus:outline-0 placeholder:text-sky-500 text-sky-500"
            />
            {formik.errors.password && (
              <p className="text-rose-500">{formik.errors.password}</p>
            )}
          </div>
          <input type="submit" className="bg-sky-500 w-40 rounded-sm" />
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
