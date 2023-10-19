'use client'

import { isLoggedIn } from "@/services/auth.services";
import UserHeader from "./UserHeader";
import PublicHeader from "./PublicHeader";

const Headers = () => {
    const userLoggedIn = isLoggedIn();

    return userLoggedIn ? <UserHeader /> : <PublicHeader />;
};

export default Headers;
