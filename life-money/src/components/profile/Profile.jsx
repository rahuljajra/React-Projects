import {useState, useEffect} from 'react';
import Users from '../users/Users';
function Profile({filteredData}) {

        const [data, setData] = useState([]);
        const [displayData, setDisplaydata] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState(null);
        const [isCreateUser, setIsCreateUser] = useState(false);
        const [selectedUser, setSelectedUser] = useState(null);
        const [mode, setMode] = useState("create");

        useEffect(() => {

            const fetchData = async() => {
                try {
                    const response = await fetch("https://dummyjson.com/users");
                    if(!response.ok) {
                        throw new Error(`Http Error! Status: ${response.status}`)
                    }
                    const result = await response.json();
                    console.log(result.users)
                    setData(result.users);
                    setDisplaydata(result.users)
                    setError(null);
                } catch(err) {
                    setError(err.message)
                    setData([]);
                    setDisplaydata([]);
                } finally {
                    setIsLoading(false);
                }
            }

            fetchData();
            
        }, []);

        useEffect(() => {
            if(filteredData && filteredData.length > 0) {
                setDisplaydata(filteredData);
            } else {
                setDisplaydata(data);
            }
        }, [filteredData, data])

        if(isLoading) {
            return <h2>Loading...</h2>;
        }

        if(error) {
            return <div className='error'>Error: {error}</div>
        }

        const deleteUser = (id) => {
            const updatedData = data.filter(employee => employee.id !== id)
            setData(updatedData);
            setDisplaydata(updatedData);
            alert(`${id} is deleted successfully`);
        }

        const editUser = (user) => {
            setMode("edit");
            setSelectedUser(user)
            setIsCreateUser(true);
        }

        const createUser = () => {
            setMode("create");
            setSelectedUser(null);
            setIsCreateUser(true);
        }
        

    return(
        <>
            <h1 className="text-center text-3xl mt-8">Employee's Information</h1>
            <section id="users-data">
                <div className="container m-auto">
                    <div className='user-create text-right'>
                        <button role='button' className='bg-green-500 text-white p-2 rounded my-2' onClick={createUser}>Create User</button>
                        <div className='create-user-wrapper'>
                            <Users isCreateUser={isCreateUser} 
                            setIsCreateUser = {setIsCreateUser} 
                            mode= {mode} selectedUser={selectedUser} setData= {setData} setDisplaydata={setDisplaydata}/>
                        </div>
                    </div>
                    <table className="table-auto border-collapse border border-slate-400 w-full">
                    <thead>
                        <tr>
                            <th className="border border-slate-300">Profile</th>
                            <th className="border border-slate-300">Name</th>
                            <th className="border border-slate-300">Title</th>
                            <th className="border border-slate-300">Email</th>
                            <th className="border border-slate-300">Role</th>
                            <th className="border border-slate-300"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayData.map((details) => (
                            <tr key={details.id}>
                                <td className="border border-slate-300 text-center px-2"><img className='m-auto' alt="user-icon" src={details.image}/></td>
                                <td className="border border-slate-300 text-center px-2">{details.username}</td>
                                <td className="border border-slate-300 text-center px-2">{details.company?.title}</td>
                                <td className="border border-slate-300 text-center px-2">{details.email}</td>
                                <td className="border border-slate-300 text-center px-2">{details.company?.department}</td>
                                <td className="border border-slate-300 text-center px-2">
                                    <button className="bg-blue-600 rounded p-2 text-white" onClick={()=> editUser(details)} aria-label="edit">Edit</button>
                                    <button className="ml-2 bg-red-600 rounded p-2 text-white" onClick={()=> deleteUser(details.id)} aria-label="delete">Delete</button>
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                    </table>
                </div>

            </section>
        </>
    )
}

export default Profile;