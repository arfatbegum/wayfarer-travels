import { Row } from "antd";
import Image from "next/image";
import notFoundImage from "@/assets/not-found.png"
const NotFoundPage = () => {
    return (
        <div>
            <Row
                justify="center"
                align="middle"
                style={{
                    height: "100vh",
                    backgroundColor: "white",
                    color: "black"
                }}
            >
                <Image src={notFoundImage} width={500} height={500} alt="Not Found Image" />
            </Row>
        </div>
    );
};

export default NotFoundPage;