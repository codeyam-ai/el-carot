'use client';

// Shared open/close state for the star menu, so both the global toggle (mobile,
// and the close-X on desktop) and the in-nav star (desktop) drive the same menu.

import React, { createContext } from 'react';

interface MenuCtx {
  open: boolean;
  setOpen: (o: boolean) => void;
  toggle: () => void;
}

const Ctx = createContext<MenuCtx>({ open: false, setOpen: () => {}, toggle: () => {} });

export function useMenu(): MenuCtx {
  return React.useContext(Ctx);
}

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const toggle = React.useCallback(() => setOpen((o) => !o), []);
  const value = React.useMemo<MenuCtx>(() => ({ open, setOpen, toggle }), [open, toggle]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
