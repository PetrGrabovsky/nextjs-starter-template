import { IconType } from 'react-icons';
import { HomeIcon } from './icons';
import { GenericIcon } from './icons';
import { ContactIcon } from './icons';

interface NavItem {
  id: number;
  href: string;
  label: string;
  Icon: IconType;
}

export const navItems: NavItem[] = [
  { id: 1, href: '/', label: 'Home', Icon: HomeIcon },
  { id: 2, href: '/href1', label: 'Link 1', Icon: GenericIcon },
  { id: 3, href: '/href2', label: 'Link 2', Icon: GenericIcon },
  { id: 4, href: '/href3', label: 'Link 3', Icon: GenericIcon },
  { id: 5, href: '/contact', label: 'Kontakt', Icon: ContactIcon },
];
