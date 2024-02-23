import { useState, FC } from "react";
import { Cross1Icon, InfoCircledIcon, CheckIcon } from "@radix-ui/react-icons";

const statusMap = {
  success: {
    bgColor: "bg-basics-success",
    Icon: CheckIcon,
  },
  error: {
    bgColor: "bg-basics-error",
    Icon: InfoCircledIcon,
  },
  warning: {
    bgColor: "bg-basics-warning",
    Icon: InfoCircledIcon,
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

  const { bgColor, Icon } = statusMap[type] || statusMap.success;

  if (!show) return null;

  return (
    <div
      className={`${position} w-full p-4 ${bgColor} text-white flex items-center justify-between`}
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
        <Cross1Icon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Toast;
