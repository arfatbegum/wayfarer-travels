'use client'

import { isLoggedIn } from "@/services/auth.services";
import UserHeader from "./UserHeader";
import DynamicHeader from "./DynamicHeader";

const Headers = () => {
    const userLoggedIn = isLoggedIn();

    return userLoggedIn ? <UserHeader /> : <DynamicHeader />;
};

export default Headers;
