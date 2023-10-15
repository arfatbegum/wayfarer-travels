import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  QuestionCircleOutlined,
  ContactsOutlined,
  SlackOutlined,
  BookOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";
export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined style={{ fontSize: '20px', color: '#7c3aed' }}/>,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/users`}>All Users</Link>,
      key: "users",
      icon: <ContactsOutlined style={{ fontSize: '20px', color: '#7c3aed' }}/>,
    },
    {
      label: <Link href={`/${role}/services`}>All Services</Link>,
      key: "users",
      icon: <TableOutlined style={{ fontSize: '20px', color: '#7c3aed' }}/>,
    },
    {
      label: <Link href={`/${role}/booking`}>All Booking</Link>,
      key: "booking",
      icon: <SlackOutlined style={{ fontSize: '20px', color: '#7c3aed' }}/>,
    },
    {
      label: <Link href={`/${role}/news`}>News</Link>,
      key: "news",
      icon: <BookOutlined style={{ fontSize: '20px', color: '#7c3aed' }}/>,
    },
    {
      label: <Link href={`/${role}/faq`}>FAQ</Link>,
      key: "faq",
      icon: <QuestionCircleOutlined style={{ fontSize: '20px', color: '#7c3aed' }}/>,
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/admin`}>Admin</Link>,
      icon: <TableOutlined style={{ fontSize: '20px', color: '#7c3aed' }}/>,
      key: `/${role}/admin`,
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/booking`}>Booking</Link>,
      icon: <SlackOutlined style={{ fontSize: '20px', color: '#7c3aed' }}/>,
      key: `/${role}/booking`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};