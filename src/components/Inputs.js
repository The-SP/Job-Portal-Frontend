import { useField } from "formik";

const MyTextInput = ({ label, required, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <div className="form-group mb-3">
      <label htmlFor={props.id || props.name} className="form-label">
        {label}
        {required && <span className="text-danger"> *</span>}
      </label>
      <input className="form-control" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-danger small">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, required, options, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group mb-3">
      <label htmlFor={props.id || props.name} className="form-label">
        {label}
        {required && <span className="text-danger"> *</span>}
      </label>
      <select className="form-control" {...field} {...props}>
        <option value="" className="text-secondary">
          Select a {label}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>{" "}
      {meta.touched && meta.error ? (
        <div className="text-danger small">{meta.error}</div>
      ) : null}
    </div>
  );
};

// const MyCheckbox = ({ children, ...props }) => {
//   // React treats radios and checkbox inputs differently other input types, select, and textarea.
//   // Formik does this too! When you specify `type` to useField(), it will
//   // return the correct bag of props for you -- a `checked` prop will be included
//   // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
//   const [field, meta] = useField({ ...props, type: "checkbox" });
//   return (
//     <div>
//       <label className="checkbox-input">
//         <input type="checkbox" {...field} {...props} />
//         {children}
//       </label>
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };

export { MyTextInput, MySelect };
