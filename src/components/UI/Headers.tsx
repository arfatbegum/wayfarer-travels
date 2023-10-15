"use client";

import { isLoggedIn } from "@/services/auth.services";
import UserHeader from "./UserHeader";

const Headers = () => {
    const userLoggedIn = isLoggedIn();

    return userLoggedIn ? <UserHeader /> : null;
};

export default Headers;
