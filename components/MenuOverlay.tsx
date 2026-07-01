'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useCarot } from '@/lib/i18n';
import { useMenu } from '@/lib/menu';
import { useIsDesktop } from '@/lib/useIsDesktop';
import { MenuToggle } from '@/components/MenuToggle';
import { CarotMenu } from '@/components/CarotMenu';

/**
 * Global star-menu chrome: the full-screen overlay plus the floating star ↔ X
 * toggle. On mobile the floating star is always shown (top-right corner). On
 * desktop the opening star lives in the nav cluster (NavRightCluster); the
 * floating toggle then appears only while OPEN, acting as the close-X above the
 * overlay. Lives in the root layout; closes itself on navigation.
 */
export function MenuOverlay() {
  const { t } = useCarot();
  const router = useRouter();
  const pathname = usePathname();
  const isDesktop = useIsDesktop();
  const { open, setOpen, toggle } = useMenu();

  // Close the menu whenever the route changes.
  React.useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);

  const goto = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      {open && <CarotMenu onAbout={() => goto('/about')} onGallery={() => goto('/gallery')} />}
      {(!isDesktop || open) && <MenuToggle open={open} onToggle={toggle} label={open ? t.close : t.menu} />}
    </>
  );
}

export default MenuOverlay;
