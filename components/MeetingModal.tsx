import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  buttonText?: string;
  handleClick?: () => void;
  image?: string;
  buttonIcon?: string;
}
const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  buttonText,
  handleClick,
  children,
  image,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none text-white bg-dark-1 px-6 py-9">
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt={title} width={72} height={72} />
            </div>
          )}
          <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
            {title}
          </h1>
          {children}
        </div>
        <Button
          onClick={handleClick}
          className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {buttonIcon && (
            <Image src={buttonIcon} alt="button-icon" width={12} height={12} />
          )}
          &nbsp;
          {buttonText || "Schedule Meeting"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
