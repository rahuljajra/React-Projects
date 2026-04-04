import { useEffect, useState } from "react";

function Users({isCreateUser, setIsCreateUser, mode, selectedUser, setData}) {

    if(!isCreateUser) return null;
    const [formData, setFormData] = useState({
        purl: "",
        name: "",
        title: "",
        email: "",
        role: ""
    });
    
    useEffect(() => {
        if (selectedUser) {
            setFormData({
                purl: selectedUser.image || "",
                name: selectedUser.username || "",
                title: selectedUser.company?.title || "",
                email: selectedUser.email || "",
                role: selectedUser.company?.department || ""
            });
        } else {
            setFormData({
                purl: "",
                name: "",
                title: "",
                email: "",
                role: ""
            });
        }
    }, [selectedUser]);

    let handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const payload = {
            image: formData.purl,
            username: formData.name,
            email: formData.email,
            company: {
                title: formData.title,
                department: formData.role
            }
        };
    
        try {
            const response = await fetch(
                mode === "create"
                    ? "https://dummyjson.com/users/add"
                    : `https://dummyjson.com/users/${selectedUser.id}`,
                {
                    method: mode === "create" ? "POST" : "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                }
            );
    
            const result = await response.json();
    
            setData((prev) => {
                if (mode === "create") {
                    return [...prev, result];
                }
            
                return prev.map((user) =>
                    user.id === result.id ? result : user
                );
            });
    
            setIsCreateUser(false);
        } catch (error) {
            console.log(error);
        }
    };
    return(
        <div className="user-modal shadow-lg bg-white absolute top-1/2 left-1/2 right-1/2 w-1/2">
                <div className="cross-icon text-right p-2 cursor-pointer inline-block" 
                onClick={() => setIsCreateUser(false)}><i className="fa-solid fa-xmark"></i></div>
                 <form className="grid grid-cols-2 gap-4 text-left p-8" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-1 font-medium">Profile Image URL</label>
                        <input
                            type="text"
                            placeholder="Enter image URL"
                            name="purl"
                            value={formData.purl}
                            onChange={handleChange}
                            className="w-full border rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Title</label>
                        <input
                            type="text"
                            placeholder="Enter title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full border rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded p-2"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block mb-1 font-medium">Department / Role</label>
                        <input
                            type="text"
                            placeholder="Enter role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full border rounded p-2"
                        />
                    </div>

                    <div className="col-span-2 flex justify-end gap-3 mt-4">
                        <button
                            type="button"
                            className="px-4 py-2 border rounded"
                            onClick={() => setIsCreateUser(false)}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Save User
                        </button>
                    </div>
                </form>
        </div>
    )
}

export default Users;