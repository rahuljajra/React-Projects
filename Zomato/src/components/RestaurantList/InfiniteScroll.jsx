import { useEffect, useState, useCallback } from "react";
import { LOAD_RES_LIST } from "../utils/constants";

const InfiniteScroll = () => {
    const [list, setList] = useState([]);
    const [page, setPage] =  useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        getMoreData();
    }, [page]);

    const getMoreData = async () => {
        if(loading) return;
        setLoading(true);
        const data = await fetch(LOAD_RES_LIST + page);
        const json = await data.json();

        if(json.length === 0) {
            setHasMore(false);
            return;
        }
        setList((prev) => [...prev, ...json]);
        setLoading(false);
    }

    const detectScroll = useCallback(() => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        const isBottom = scrollTop + clientHeight >= scrollHeight - 100;

        if(isBottom && !loading && hasMore) {
            setPage((prev) => prev + 1);
        }
        if(!hasMore) {
            setLoading(false);
        }
    }, [loading, hasMore]);

    useEffect(() => {
        window.addEventListener("scroll", detectScroll);
        return ()=> window.removeEventListener("scroll", detectScroll);
    }, [detectScroll])
    return(
        <>
            <div className="grid grid-cols-4 gap-8 container mx-auto my-8">
                {list.map((users) => (
                    <div key={users.id} className="users-card border border-amber-50 shadow-lg p-4">
                        <h2 className="text-xl font-bold">{users.title}</h2>
                        <p className="text-gray-400">{users.body}</p>
                    </div>
                ))}
                
            </div>
            {loading &&(
                <div className="text-center py-6 text-gray-400 text-lg">
                    Loading more...
                </div>
            )}

            {!hasMore && (
                <div className="text-center py-6 text-gray-500">
                    No more posts to load
                </div>
            )}
        </>
    )
}

export default InfiniteScroll;