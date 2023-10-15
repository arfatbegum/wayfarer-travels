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
import { getUserInfo } from "@/services/auth.services";

const userRole = getUserInfo() as string;
console.log(userRole)

export const sidebarItems = (userRole: string) => {
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
      label: <Link href={`/${userRole}/user`}>User</Link>,
      key: "user",
      icon: <ContactsOutlined style={{ fontSize: '20px', color: '#7c3aed' }}/>,
    },
    {
      label: <Link href={`/${userRole}/service`}>Service</Link>,
      key: "service",
      icon: <TableOutlined style={{ fontSize: '20px', color: '#7c3aed' }}/>,
    },
    {
      label: <Link href={`/${userRole}/booking`}>Booking</Link>,
      key: "booking",
      icon: <SlackOutlined style={{ fontSize: '20px', color: '#7c3aed' }}/>,
    },
    {
      label: <Link href={`/${userRole}/news`}>News</Link>,
      key: "news",
      icon: <BookOutlined style={{ fontSize: '20px', color: '#7c3aed' }}/>,
    },
    {
      label: <Link href={`/${userRole}/faq`}>FAQ</Link>,
      key: "faq",
      icon: <QuestionCircleOutlined style={{ fontSize: '20px', color: '#7c3aed' }}/>,
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${userRole}/admin`}>Admin</Link>,
      icon: <TableOutlined style={{ fontSize: '20px', color: '#7c3aed' }}/>,
      key: `/${userRole}/admin`,
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${userRole}/booking`}>Booking</Link>,
      icon: <SlackOutlined style={{ fontSize: '20px', color: '#7c3aed' }}/>,
      key: `/${userRole}/booking`,
    },
  ];

  if (userRole === "super_admin") return superAdminSidebarItems;
  else if (userRole === "admin") return adminSidebarItems;
  else if (userRole === "user") return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};