import { useState, FC } from "react";
import { Cross1Icon, InfoCircledIcon, CheckIcon } from "@radix-ui/react-icons";

const statusMap = {
  success: {
    bgColor: "bg-basics-success10 border border-basics-success rounded",
    textColor: "text-basics-success",
    iconColor: "text-black",
    Icon: CheckIcon,
  },
  error: {
    bgColor: "bg-basics-error10 border border-basics-error rounded",
    textColor: "text-basics-error",
    iconColor: "text-black",
    Icon: InfoCircledIcon,
  },
  warning: {
    bgColor: "bg-basics-warning",
    Icon: InfoCircledIcon,
    textColor: "text-white",
  },
};

interface ToastProps {
  message: string;
  position?: string;
  type?: keyof typeof statusMap;
  handleClose?: () => void;
}

const Toast: FC<ToastProps> = ({
  handleClose,
  message,
  position = "top",
  type = "success",
}) => {
  const [show, setShow] = useState(true);

  const { bgColor, textColor, Icon } = statusMap[type] || statusMap.success;

  if (!show) return null;

  return (
    <div
      className={`fixed ${position} w-full p-4 ${bgColor} ${textColor} flex items-center justify-between`}
    >
      <div className="flex items-center">
        <Icon className="h-5 w-5 mr-2" />
        <p className="p-0 m-0">{message}</p>
      </div>
      <button
        onClick={() => {
          setShow(false);
          if (handleClose) {
            handleClose();
          }
        }}
      >
        <Cross1Icon className={`text-black h-5 w-5`} />
      </button>
    </div>
  );
};

export default Toast;
