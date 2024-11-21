import { FC, ReactNode } from "react";

type Props = {
  label: string | ReactNode;
};

const ColumnCell: FC<Props> = ({ label }) => <th>{label}</th>;

export default ColumnCell;
