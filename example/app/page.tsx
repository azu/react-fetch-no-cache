import { fetchCurrentTime } from "@/app/server-action";

export const dynamic = 'force-dynamic'
export default async function Home() {
    const currentTime = await fetchCurrentTime()
    return (
        <main style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
        }}>
            <h2>Current: {currentTime}</h2>
        </main>
    );
}
