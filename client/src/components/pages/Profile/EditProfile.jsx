import { useForm } from "react-hook-form";

function EditUser({ handleEditUserProfileToggle }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = formData => console.log(formData);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="edit-user__form">
      <div className="form-control">
        <label htmlFor="firstName" className="sr-only">
          First Name
        </label>
        <input id="firstName" type="text" {...register("firstName", { required: true })} />
        {errors.email?.firstName === "required" && "Firstname is required"}
        <label htmlFor="lastName" className="sr-only">
          Last Name
        </label>
        <input
          name="lastName"
          id="lastName"
          type="text"
          {...register("lastName", { required: true })}
        />
        {errors.email?.lastName === "required" && "Lastname is required"}
      </div>
      <div className="form-control">
        <button type="submit">Save</button>
        <button onClick={handleEditUserProfileToggle}>Cancel</button>
      </div>
    </form>
  );
}

export default EditUser;
