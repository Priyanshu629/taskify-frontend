"use client";

import { useEffect } from "react";
import { useGlobal } from "../context/global";
import { useRouter } from "next/navigation";

const useCheck = () => {
    const { isLogin } = useGlobal();
    const router = useRouter();

    useEffect(() => {
        if (isLogin) {
            return router.replace("/dashboard");

        }
    }, [router, isLogin]);
}

export default useCheck
