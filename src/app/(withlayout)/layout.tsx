"use client";
import Contents from "@/components/UI/Contents";
import SideBar from "@/components/UI/Sidebar";
import { Layout } from "antd";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout>
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