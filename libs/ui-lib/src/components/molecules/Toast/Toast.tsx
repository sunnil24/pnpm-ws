import React, { useState, FC } from "react";
import { Cross1Icon, InfoCircledIcon, CheckIcon } from "@radix-ui/react-icons";

interface ToastProps {
  message?: string;
  position: string;
  type: "success" | "error" | "warning";
  handleClose: () => void;
}

const Toast: FC<ToastProps> = ({ handleClose, message, position, type }) => {
  const [show, setShow] = useState(true);

  let bgColor, Icon;
  switch (type) {
    case "success":
      bgColor = "bg-basics-success";
      Icon = CheckIcon;
      break;
    case "error":
      bgColor = "bg-basics-error";
      Icon = InfoCircledIcon;
      break;
    case "warning":
      bgColor = "bg-basics-warning";
      Icon = InfoCircledIcon;
      break;
    default:
      bgColor = "bg-basics-success";
      Icon = CheckIcon;
  }

  if (!show) return null;

  return (
    <div
      className={`fixed ${position} w-full p-4 ${bgColor} text-white flex items-center justify-between`}
    >
      <div className="flex items-center">
        <Icon className="h-5 w-5 mr-2" />
        <span className="p-0 m-0">{message}</span>
      </div>
      <button
        onClick={() => {
          setShow(false);
          handleClose();
        }}
      >
        <Cross1Icon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Toast;
