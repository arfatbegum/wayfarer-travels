import { Breadcrumb } from "antd";
import Link from "next/link";
import { HomeOutlined } from "@ant-design/icons";

const BreadCrumb = ({
    items,
}: {
    items: {
        label: string;
        link: string;
    }[];
}) => {
    const breadCrumbItems = [
        {
            title: (
              <Link href="/">
                <HomeOutlined style={{ fontSize: '18px', color: '#4338ca',}}/>
              </Link>
            ),
          },
          ...items.map((item) => {
            return {
              title: item.link ? (
                <Link href={item.link}>{item.label}</Link>
              ) : (
                <span className="px-5">{item.label}</span>
              ),
            };
        }),
    ];

    return <Breadcrumb items={breadCrumbItems} className="mt-5"></Breadcrumb>;
};

export default BreadCrumb;