import { createContext, useContext, useState, type ReactNode } from "react";
import { BookDemoModal } from "../components/BookDemoModal";

interface DemoModalContextValue {
  openDemo: () => void;
  closeDemo: () => void;
}

const DemoModalContext = createContext<DemoModalContextValue | null>(null);

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openDemo = () => setOpen(true);
  const closeDemo = () => setOpen(false);

  return (
    <DemoModalContext.Provider value={{ openDemo, closeDemo }}>
      {children}
      <BookDemoModal open={open} onClose={closeDemo} />
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx) throw new Error("useDemoModal must be used within DemoModalProvider");
  return ctx;
}
