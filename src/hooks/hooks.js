"use client";

import { useState, useEffect } from "react";
import { getOpinions } from "../services/services";

// Custom hook to get opinions.
export const useFetchOpinions = () => {
    // Variable to save opinions.
    const [opinions, setOpinions] = useState([]);

    // Hook to get the opinions.
    useEffect(() => {
        getOpinions().then((data) => {
            setOpinions(data);
        });
    }, []);

    return { opinions };
}