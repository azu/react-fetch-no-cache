"use server";
import { fetch } from "react-fetch-no-cache";

export const fetchCurrentTime = async () => {
    console.log("fetching current time");
    const res = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    const json = await res.json();
    console.log("fetched current time: ", json.utc_datetime);
    return json.utc_datetime
}
