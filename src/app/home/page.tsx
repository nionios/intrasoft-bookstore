import Feed from "@/components/Feed/Feed";

/**
 * The homepage where our feed of jobs (Feed Component) lives.
 * @constructor
 */
export default function Home() {
    return (
        <main className="flex min-h-max flex-col items-center justify-between p-24">
            This is the homepage
            <Feed/>
        </main>
    );
}
