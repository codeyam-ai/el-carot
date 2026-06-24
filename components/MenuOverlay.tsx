'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useCarot } from '@/lib/i18n';
import { MenuToggle } from '@/components/MenuToggle';
import { CarotMenu } from '@/components/CarotMenu';

/**
 * Global star-menu chrome: the fixed star ↔ X toggle plus the full-screen
 * overlay. Lives in the root layout so it's available on every screen. Closes
 * itself on navigation.
 */
export function MenuOverlay() {
  const { t } = useCarot();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  // Close the menu whenever the route changes.
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const goto = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      {open && <CarotMenu onAbout={() => goto('/about')} onGallery={() => goto('/gallery')} />}
      <MenuToggle open={open} onToggle={() => setOpen((m) => !m)} label={open ? t.close : t.menu} />
    </>
  );
}

export default MenuOverlay;
