import { useSelector } from "react-redux";
import store from "../utils/store";

const Sidebar = () => {

    const isOpenMenu = useSelector(store => store.app.isOpenMenu);

    if(!isOpenMenu) return null;

    return(
        <div className="col-span-2 h-dvh bg-gray-300 px-4">
           <ul className="border-b-2">
                <li className="p-2">Home</li>
                <li className="p-2">Shorts</li>
                <li className="p-2">Live</li>
           </ul>
           <div>
                <h3 className="text-lg">Subscriptions</h3>
                <ul className="border-b-2">
                    <li className="p-2">Home</li>
                    <li className="p-2">Shorts</li>
                    <li className="p-2">Live</li>
                </ul>
           </div>
           <div>
                <h3 className="text-lg">Subscriptions</h3>
                <ul className="border-b-2">
                    <li className="p-2">Home</li>
                    <li className="p-2">Shorts</li>
                    <li className="p-2">Live</li>
                </ul>
           </div>
        </div>
    )
}

export default Sidebar;