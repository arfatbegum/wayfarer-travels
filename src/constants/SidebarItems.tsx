import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  QuestionCircleOutlined,
  ContactsOutlined,
  SlackOutlined,
  ReadOutlined,
  MessageOutlined,
  CheckCircleOutlined,
  AppstoreOutlined,
  UsergroupAddOutlined
} from "@ant-design/icons";
import Link from "next/link";

export const sidebarItems = (userRole: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/profile`}>Profile</Link>,
      key: "profile",
      icon: <ProfileOutlined style={{ fontSize: '20px', color: '#0f337a' }} />,
    },
  ];

  const adminAndSuperAdmindefaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${userRole}/profile`}>Profile</Link>,
      key: "profile",
      icon: <ProfileOutlined style={{ fontSize: '20px', color: '#0f337a' }} />,
    },
    {
      label: <Link href={`/${userRole}/user`}>User</Link>,
      key: "user",
      icon: <ContactsOutlined style={{ fontSize: '20px', color: '#0f337a' }} />,
    },
    {
      label: <Link href={`/${userRole}/category`}>Category</Link>,
      key: "category",
      icon: <AppstoreOutlined style={{ fontSize: '20px', color: '#0f337a' }} />,
    },
    {
      label: <Link href={`/${userRole}/package`}>Package</Link>,
      key: "package",
      icon: <TableOutlined style={{ fontSize: '20px', color: '#0f337a' }} />,
    },
    {
      label: <Link href={`/${userRole}/booking`}>Booking</Link>,
      key: "booking",
      icon: <SlackOutlined style={{ fontSize: '20px', color: '#0f337a' }} />,
    },
    {
      label: <Link href={`/${userRole}/news`}>News</Link>,
      key: "news",
      icon: <ReadOutlined style={{ fontSize: '20px', color: '#0f337a' }} />,
    },
    {
      label: <Link href={`/${userRole}/team`}>Team</Link>,
      key: "team",
      icon: <UsergroupAddOutlined style={{ fontSize: '20px', color: '#0f337a' }} />,
    },
    {
      label: <Link href={`/${userRole}/faq`}>FAQ</Link>,
      key: "faq",
      icon: <QuestionCircleOutlined style={{ fontSize: '20px', color: '#0f337a' }} />,
    },
    {
      label: <Link href={`/${userRole}/contact`}>Enquiry</Link>,
      key: "contact",
      icon: <MessageOutlined style={{ fontSize: '20px', color: '#0f337a' }} />,
    },
    {
      label: <Link href={`/${userRole}/feedback`}>Feedback</Link>,
      key: "feedback",
      icon: <CheckCircleOutlined  style={{ fontSize: '20px', color: '#0f337a' }} />,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...adminAndSuperAdmindefaultSidebarItems,
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...adminAndSuperAdmindefaultSidebarItems,
    {
      label: <Link href={`/${userRole}/admin`}>Admin</Link>,
      icon: <TableOutlined style={{ fontSize: '20px', color: '#0f337a' }} />,
      key: `/${userRole}/admin`,
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/profile`}>Profile</Link>,
      key: "profile",
      icon: <ProfileOutlined style={{ fontSize: '20px', color: '#0f337a' }} />,
    },
    {
      label: <Link href={`/booking`}>Booking</Link>,
      icon: <SlackOutlined style={{ fontSize: '20px', color: '#0f337a' }} />,
      key: `/booking`,
    },
    {
      label: <Link href={`/feedback`}>Feedback</Link>,
      icon: <CheckCircleOutlined style={{ fontSize: '20px', color: '#0f337a' }} />,
      key: `/feedback`,
    },
    {
      label: <Link href={`/enquiry`}>Enquiry</Link>,
      key: "enquiry",
      icon: <MessageOutlined style={{ fontSize: '20px', color: '#0f337a' }} />,
    },
  ];

  if (userRole === "super_admin") return superAdminSidebarItems;
  else if (userRole === "admin") return adminSidebarItems;
  else if (userRole === "user") return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};