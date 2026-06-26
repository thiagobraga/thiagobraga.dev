
import { useState, useEffect } from "react";

type Toast = {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
};

type ToastOptions = Omit<Toast, "id">;

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = ({ title, description, action, variant = "default" }: ToastOptions) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { id, title, description, action, variant };
    
    setToasts((toasts) => [...toasts, newToast]);
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      setToasts((toasts) => toasts.filter((t) => t.id !== id));
    }, 5000);
    
    return id;
  };
  
  const dismiss = (id: string) => {
    setToasts((toasts) => toasts.filter((t) => t.id !== id));
  };
  
  return {
    toast,
    dismiss,
    toasts,
  };
}

export const toast = ({ title, description, action, variant = "default" }: ToastOptions) => {
  const id = Math.random().toString(36).substring(2, 9);
  const event = new CustomEvent("toast", {
    detail: {
      id,
      title,
      description,
      action,
      variant,
    },
  });
  
  document.dispatchEvent(event);
  
  return id;
};

