import { FC, ReactNode, useLayoutEffect, useRef, useState } from "react";
import classes from "./index.module.scss";
import ColumnCell from "./ColumnCell";
import Row from "./Row";
import classNames from "classnames";

export type ColumnCell = {
  label: string | ReactNode;
  key: string;
};

export type Row = {
  id: string;
  [key: string]: string | ReactNode;
};

type Props = {
  columns: ColumnCell[];
  rows: Row[];
  isRowsExpandable?: boolean;
};

const Table: FC<Props> = ({ columns = [], rows = [], isRowsExpandable }) => {
  const [expandedRows, setExpandedRows] = useState<string[]>([]);
  const [isScrollable, setIsScrollable] = useState<boolean>(false);

  const handleRowClick = (row: Row) => {
    if (expandedRows.includes(row.id)) {
      setExpandedRows(expandedRows.filter((id) => id !== row.id));
    } else {
      setExpandedRows([...expandedRows, row.id]);
    }
  };

  const rootRef = useRef<HTMLTableSectionElement>(null);

  useLayoutEffect(() => {
    setIsScrollable(
      (rootRef.current?.clientHeight || 0) <
        (rootRef.current?.scrollHeight || 0)
    );
  }, [expandedRows]);

  return (
    <table className={classes["root"]}>
      <thead>
        <tr>
          {isRowsExpandable && <ColumnCell label="" />}
          {columns.map((column) => (
            <ColumnCell key={column.key} label={column.label} />
          ))}
        </tr>
      </thead>
      <tbody
        ref={rootRef}
        className={classNames({
          [classes["can-scroll"]]: isScrollable,
        })}
      >
        {rows.map((row) => (
          <Row
            key={row.id}
            content={columns.map((column) => row[column.key])}
            isExpandable={isRowsExpandable}
            isExpanded={expandedRows.includes(row.id)}
            onClick={() => isRowsExpandable && handleRowClick(row)}
            expandedContent={row.expandedContent}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
