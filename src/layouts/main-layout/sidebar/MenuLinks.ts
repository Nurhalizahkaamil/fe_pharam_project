import { SvgIconProps } from '@mui/material';
import CreditCardIcon from 'components/icons/menu-icons/CreditCardIcon';
import HomeIcon from 'components/icons/menu-icons/HomeIcon';
import InvestIcon from 'components/icons/menu-icons/InvestIcon';
import LoanIcon from 'components/icons/menu-icons/LoanIcon';
import SignInIcon from 'components/icons/menu-icons/SignInIcon';
import SignUpIcon from 'components/icons/menu-icons/SignUpIcon';
import TransferIcon from 'components/icons/menu-icons/TransferIcon';
import UserIcon from 'components/icons/menu-icons/UserIcon';

export enum linkEnum {
  Dashboard = 'dashboard',
  MasterProduct = 'Master Products',
  MasterInventory = 'Master Inventory',
  Supplier = 'Supplier',
  Report = 'Report Entry Product',
  Profile = 'Profile',
  Login = 'login',
  Signup = 'sign-up',
  ForgetPassword = 'forget-password',
  ResetPassword = 'reset-password',
  Categories = 'Categories',
  Units = 'Units',
  Products = 'Products',
}

export interface MenuLinkType {
  id: number;
  title: string;
  link: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  available: boolean;
  items?: MenuLinkType[]; // Menambahkan properti items dengan tipe array MenuLinkType
}

export const menuLinks: MenuLinkType[] = [
  {
    id: 1,
    title: linkEnum.Dashboard,
    link: '/',
    icon: HomeIcon,
    available: true,
  },
  {
    id: 8,
    title: linkEnum.MasterProduct,
    link: '#!',
    icon: TransferIcon,
    available: true,
    items: [
      {
        id: 9,
        title: linkEnum.Units,
        link: '#!',
        icon: TransferIcon,
        available: true,
      },
      {
        id: 10,
        title: linkEnum.Categories,
        link: '#!',
        icon: TransferIcon,
        available: true,
      },
      {
        id: 11,
        title: linkEnum.Products,
        link: '#!',
        icon: TransferIcon,
        available: true,
      },
    ],
  },
  {
    id: 2,
    title: linkEnum.MasterInventory,
    link: '#!',
    icon: UserIcon,
    available: false,
  },
  {
    id: 3,
    title: linkEnum.Supplier,
    link: '#!',
    icon: InvestIcon,
    available: false,
  },
  {
    id: 4,
    title: linkEnum.Report,
    link: '#!',
    icon: CreditCardIcon,
    available: false,
  },
  {
    id: 5,
    title: linkEnum.Profile,
    link: '#!',
    icon: LoanIcon,
    available: false,
  },
  {
    id: 6,
    title: linkEnum.Login,
    link: '/authentication/login',
    icon: SignInIcon,
    available: true,
  },
  {
    id: 7,
    title: linkEnum.Signup,
    link: '/authentication/sign-up',
    icon: SignUpIcon,
    available: true,
  },
];
