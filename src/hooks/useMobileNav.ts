import { useCallback, useState } from "react";

export function useMobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((open) => !open), []);
  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, toggle, close };
}
