import { FC, ReactNode } from "react";
import classes from "./Row.module.scss";
import classNames from "classnames";

type Props = {
  content: ReactNode[];
  isExpanded?: boolean;
  onClick?: () => void;
  isExpandable?: boolean;
  expandedContent?: ReactNode;
};

const Row: FC<Props> = ({
  content,
  isExpanded,
  onClick,
  isExpandable,
  expandedContent,
}) => {
  return (
    <>
      <tr
        onClick={onClick}
        className={classNames(classes["root"], {
          [classes["canClick"]]: isExpandable,
          [classes["expanded"]]: isExpanded,
        })}
      >
        {isExpandable && (
          <td className={classes["expand-icon"]}>
            <i
              className={classNames("fa", {
                "fa-angle-up": isExpanded,
                "fa-angle-down": !isExpanded,
              })}
              aria-hidden="true"
            ></i>
          </td>
        )}
        {content.map((item, index) => (
          <td key={index}>{item}</td>
        ))}
      </tr>
      {isExpanded && (
        <tr
          className={classNames(classes["root"], classes["expanded-content"])}
        >
          <td></td>
          <td colSpan={content.length}>{expandedContent}</td>
        </tr>
      )}
    </>
  );
};

export default Row;
