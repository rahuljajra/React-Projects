import Sidebar from "./Sidebar";
import Maincontainer from "./Maincontainer";
const Body = () => {
    return (
        <div>

            <div className="grid grid-flow-col container m-auto">
                <Sidebar />
                <Maincontainer />
            </div>

        </div>
    )
}

export default Body;