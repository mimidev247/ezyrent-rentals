import { createContext, useCallback, useContext, useRef, useState } from "react";

const ToastContext = createContext({ toast: () => {} });

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const toastCounter = useRef(0);

  const toast = useCallback(({ title, description }) => {
    toastCounter.current += 1;
    const id = `toast-${Date.now()}-${toastCounter.current}`;
    setToasts((prev) => [...prev, { id, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id));
    }, 3500);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed right-4 top-4 z-50 flex flex-col gap-3">
        {toasts.map((item) => (
          <div
            key={item.id}
            className="w-[320px] rounded-lg border border-slate-200 bg-white p-4 text-slate-900 shadow-xl"
          >
            <p className="text-sm font-semibold">{item.title}</p>
            <p className="mt-1 text-sm text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { ToastProvider, useToast };
