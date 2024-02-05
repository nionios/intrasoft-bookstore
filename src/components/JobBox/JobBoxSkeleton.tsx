/**
 * Skeleton for a JobBox, shows up with loader when loading more jobs
 * @constructor
 */
export default function JobBoxSkeleton() {
    return (
        <li id="placeholder"
            key="placeholder"
            className={`grid grid-rows-2 grid-cols-5 animate-fade job-post rounded-lg m-5 drop-shadow-lg gap-x-6 p-5`}>
            <div className="w-40 h-40 row-span-2 col-span-1 min-w-0 gap-x-1 kariera-accent rounded-lg animate-pulse"/>
            <div className="row-span-1 col-span-4 min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                    <div className="w-24 rounded-full kariera-accent h-5 mt-1 truncate text-md leading-5 text-gray-500 animate-pulse"/>
                    <div className="w-52 my-3 rounded-full kariera-accent h-5 text-2xl font-semibold leading-6 text-gray-900 py-1 animate-pulse"/>
                </div>
            </div>
            <div className="grid row-span-1 col-span-4 grid-cols-4 grid-rows-1 gap-4 content-end">
                <div className="grid h-20 kariera-accent rounded-lg col-span-1 animate-pulse"/>
                <div className="grid h-20 kariera-accent rounded-lg col-span-1 animate-pulse"/>
                <div className="grid h-20 kariera-accent rounded-lg col-span-1 animate-pulse"/>
                <div className="grid h-8 kariera-accent rounded-full col-span-1 my-6 animate-pulse">
                </div>
            </div>
        </li>
    );
}
