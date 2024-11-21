import { FC, useState } from "react";
import { Transaction } from "../../../types/transactions";
import classes from "./TransactionDetails.module.scss";
import { useForm } from "react-hook-form";
import Input from "../../../components/Input";
import IconButton from "../../../components/IconButton";
import Chip from "../../../components/Chip";
import useViewPort from "../../../hooks/useViewPort";
import { useAppDispatch } from "../../../redux/hooks";
import { updateTransaction } from "../../../redux/transactions/transactionsActions";
import Select from "../../../components/Select";
import { TransactionCategory } from "./constants";

type ItemProps = {
  transactionId: string;
  label: string;
  value: string;
  useChip?: boolean;
  chipColor?: "default" | "success" | "error" | "warning" | "info";
  canUpdate?: boolean;
};

const Item: FC<ItemProps> = ({
  transactionId,
  label,
  value,
  canUpdate,
  useChip,
  chipColor,
}) => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useAppDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setValue("value", value);
  };

  const onSubmit = () => {
    setIsEditing(false);

    if (watch("value") === value) {
      return;
    }

    dispatch(
      updateTransaction({
        id: transactionId,
        [label.toLowerCase()]: watch("value"),
      })
    );
  };

  if (!canUpdate) {
    return (
      <div className={classes["item"]}>
        <span className={classes["label"]}>{label}:</span>
        <div className={classes["value-container"]}>
          {useChip ? (
            <Chip label={value} type={chipColor} />
          ) : (
            <span className={classes["value"]}>{value}</span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={classes["item"]}>
      <span className={classes["label"]}>{label}:</span>
      {isEditing ? (
        <form
          className={classes["value-container"]}
          onSubmit={handleSubmit(onSubmit)}
        >
          {label === "Category" ? (
            <Select
              options={Object.values(TransactionCategory)}
              formProps={register("value")}
              inputProps={{ defaultValue: value }}
            />
          ) : (
            <Input
              type="text"
              formProps={register("value")}
              inputProps={{ defaultValue: value }}
              isDirty={!!watch("value")}
            />
          )}
          <IconButton
            icon={<i className="fa fa-check" aria-hidden="true"></i>}
            submit
          />
          <IconButton
            icon={<i className="fa fa-times" aria-hidden="true"></i>}
            onClick={handleCancel}
          />
        </form>
      ) : (
        <div className={classes["value-container"]}>
          {useChip ? (
            <Chip
              onClick={handleEdit}
              label={
                label === "Category" ? (
                  <>
                    {value}
                    <IconButton
                      icon={<i className="fa fa-pencil" aria-hidden="true"></i>}
                    />
                  </>
                ) : (
                  value
                )
              }
              type={chipColor}
            />
          ) : (
            <span className={classes["value"]}>{value}</span>
          )}
          {label !== "Category" && (
            <IconButton
              icon={<i className="fa fa-pencil" aria-hidden="true"></i>}
              onClick={handleEdit}
            />
          )}
        </div>
      )}
    </div>
  );
};

type Props = {
  transaction: Transaction;
};

const TransactionDetails: FC<Props> = ({
  transaction: { id, type, category, notes, description },
}) => {
  const { isMobile } = useViewPort();

  return (
    <div className={classes["root"]}>
      {isMobile && (
        <Item transactionId={id} label="Description" value={description} />
      )}
      <Item
        transactionId={id}
        label="Transaction Type"
        value={type}
        useChip
        chipColor={type === "INCOME" ? "success" : "error"}
      />
      <Item
        transactionId={id}
        label="Category"
        value={category}
        canUpdate
        useChip
      />
      <Item transactionId={id} label="Notes" value={notes} canUpdate />
    </div>
  );
};

export default TransactionDetails;
