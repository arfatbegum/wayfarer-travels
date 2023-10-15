"use client";

import { isLoggedIn } from "@/services/auth.services";
import UserHeader from "./UserHeader";


const Headers = () => {
    const userLoggedIn = isLoggedIn();
    return (
        <>
            {
                !userLoggedIn ? (
                    <Headers />
                ) : (
                    <UserHeader />
                )
            }
        </>

    );
};

export default Headers;