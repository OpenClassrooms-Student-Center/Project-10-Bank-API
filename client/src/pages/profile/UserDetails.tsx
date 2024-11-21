import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { userSelectors } from "../../redux/user/userSelectors";
import classes from "./UserDetails.module.scss";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { updateUserProfile } from "../../redux/user/userActions";

type Inputs = {
  firstName: string;
  lastName: string;
};

const UserDetails: FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const user = useAppSelector(userSelectors.selectUser);
  const isLoading = useAppSelector(userSelectors.selectUserLoading);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    formState,
    setValue,
    clearErrors,
  } = useForm<Inputs>({ mode: "onBlur" });

  const handleEditName = () => setIsEditing(true);
  const handleCancelEdit = () => {
    setIsEditing(false);
    if (user) {
      setValue("lastName", user?.lastName);
      setValue("firstName", user?.firstName);
    }
    clearErrors();
  };

  const onSubmit = (data: Inputs) => {
    dispatch(
      updateUserProfile({ payload: data, successFn: () => setIsEditing(false) })
    );
  };

  const isSubmitDisabled =
    !formState.isValid ||
    (watch("firstName") === user?.firstName &&
      watch("lastName") === user?.lastName);

  return (
    <>
      <h1>
        Welcome back
        <br />
        {`${user?.firstName} ${user?.lastName}!`}
      </h1>
      <div>
        {!isEditing ? (
          <div className={classes["button-wrapper"]}>
            <Button
              onClick={handleEditName}
              variant="contained"
              color="primary"
            >
              Edit name
            </Button>
          </div>
        ) : (
          <form className={classes["form"]} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes["row"]}>
              <Input
                formProps={register("firstName", {
                  required: "First name is required",
                  minLength: {
                    value: 2,
                    message: "Min 2 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Max 20 characters",
                  },
                })}
                isError={!!errors.firstName || undefined}
                errorMessage={errors.firstName?.message}
                type="text"
                inputProps={{
                  autoComplete: "given-name",
                  defaultValue: user?.firstName,
                  disabled: isLoading,
                }}
                isDirty={!!watch("firstName")}
                placeholder={user?.firstName}
              />
              <Input
                formProps={register("lastName", {
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Min 2 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Max 20 characters",
                  },
                })}
                isError={!!errors.lastName || undefined}
                errorMessage={errors.lastName?.message}
                type="text"
                inputProps={{
                  autoComplete: "family-name",
                  defaultValue: user?.lastName,
                  disabled: isLoading,
                }}
                isDirty={!!watch("lastName")}
                placeholder={user?.lastName}
              />
            </div>
            <div className={classes["row"]}>
              <Button
                variant="contained"
                color="primary"
                submit
                disabled={isSubmitDisabled}
                isLoading={isLoading}
              >
                Save
              </Button>
              <Button
                onClick={handleCancelEdit}
                variant="contained"
                color="primary"
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default UserDetails;
