"use client";

import React from "react";
import { CheckCircle, AlertCircle, AlertTriangle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NotificationProps {
  type?: "success" | "error" | "warning" | "info";
  title?: string;
  message: string;
  onClose?: () => void;
  className?: string;
}

const notificationIcons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const notificationStyles = {
  success: "notification-success",
  error: "notification-error",
  warning: "notification-warning",
  info: "notification-info",
};

export function Notification({
  type = "info",
  title,
  message,
  onClose,
  className,
}: NotificationProps) {
  const Icon = notificationIcons[type];
  const styleClass = notificationStyles[type];

  return (
    <div className={cn("notification", styleClass, className)}>
      <Icon className="notification-icon" />
      <div className="notification-content">
        {title && <div className="notification-title">{title}</div>}
        <div className="notification-message">{message}</div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="notification-close"
          aria-label="Close notification"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

interface ToastProps {
  type?: "success" | "error" | "warning" | "info";
  title?: string;
  message: string;
  onClose?: () => void;
  className?: string;
  duration?: number;
}

export function Toast({
  type = "info",
  title,
  message,
  onClose,
  className,
  duration = 5000,
}: ToastProps) {
  const Icon = notificationIcons[type];
  const styleClass = `toast-${type}`;

  React.useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div className={cn("toast", styleClass, className)}>
      <Icon className="notification-icon" />
      <div className="notification-content">
        {title && <div className="notification-title">{title}</div>}
        <div className="notification-message">{message}</div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="toast-close"
          aria-label="Close toast"
        >
          <X className="h-4 w-4" />
        </button>
      )}
      {duration > 0 && <div className="toast-progress" />}
    </div>
  );
}

interface AlertProps {
  type?: "success" | "error" | "warning" | "info";
  title?: string;
  message: string;
  onClose?: () => void;
  className?: string;
}

export function Alert({
  type = "info",
  title,
  message,
  onClose,
  className,
}: AlertProps) {
  const Icon = notificationIcons[type];
  const styleClass = `alert-${type}`;

  return (
    <div className={cn("alert", styleClass, className)}>
      <Icon className="alert-icon" />
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        <div className="alert-message">{message}</div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="alert-close"
          aria-label="Close alert"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
