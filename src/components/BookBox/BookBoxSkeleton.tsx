/**
 * Skeleton for a BookBox, shows up with loader when loading more books
 */
export default function BookBoxSkeleton() {
    return (
        <li id="placeholder"
            key="placeholder"
            className="grid grid-rows-auto grid-cols-3 md:grid-cols-5 animate-fade book-entry rounded-lg m-5 drop-shadow-lg gap-x-2 md:gap-x-6 p-5 gap-y-4">
            <div className="w-32 h-32 rounded-lg netcompany-accent animate-pulse bg-karow-span-1 md:row-span-2 col-span-1 flex min-w-0 gap-x-1 mr-1"/>
            <div className="row-span-1 col-span-2 md:col-span-4 min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                    <div className="w-24 rounded-full netcompany-accent animate-pulse mt-1 truncate text-md leading-5 py-1"/>
                    <div className="w-52 my-3 rounded-full netcompany-accent animate-pulse text-2xl font-semibold leading-6 py-1"/>
                </div>
            </div>
            <div className="grid row-span-1 col-span-3 md:col-span-4 grid-cols-3 md:grid-cols-4 grid-rows-1 gap-4 content-end">
                <div className="grid h-16 netcompany-accent rounded-lg col-span-1 animate-pulse"/>
                <div className="grid h-16 netcompany-accent rounded-lg col-span-1 animate-pulse"/>
                <div className="grid h-16 netcompany-accent rounded-lg col-span-1 animate-pulse"/>
                <div className="hidden shrink-0 h-10 netcompany-accent rounded-lg md:flex md:flex-col mt-6 col-span-1 animate-pulse"/>
            </div>
        </li>
    );
}
