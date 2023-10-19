"use client";
import Contents from "@/components/UI/Shared/Contents";
import SideBar from "@/constants/Sidebar";
import SuperAdminAndAdminHeader from "@/components/UI/Headers/SuperAdminAndAdminHeader";
import { isLoggedIn } from "@/services/auth.services";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading, userLoggedIn]);

  if (!isLoading) {
    return <p>Loading......</p>;
  }

  return (
    <Layout>
      <SuperAdminAndAdminHeader />
      <Layout>
        <SideBar />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Contents>{children}</Contents>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;