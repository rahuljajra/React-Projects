import { useState } from "react";
import Header from "../header/Header";
import Profile from "../profile/Profile";
function Dashboard() {
    const [filteredData, setFilteredData] = useState([])

    const handleSearch = (users) => {
        setFilteredData(users);
    }
    return (
        <>
            <Header onSearch={handleSearch}/>
            <Profile filteredData ={filteredData}/>
        </>
    )
}

export default Dashboard;