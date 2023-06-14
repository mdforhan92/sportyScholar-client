import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaUserShield } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageUser = () => {
    const [disabledButtons, setDisabledButtons] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users");
        return res.data;
    });

    const handleMakeAdmin = (user) => {
        console.log(user._id);

        // Disable the clicked button
        setDisabledButtons((prevDisabledButtons) => [...prevDisabledButtons, user._id]);

        fetch(`${import.meta.env.VITE_BASE_URL}/users/admin/${user._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    Swal.fire("Success!", `${user.name} is now an admin`, "success");
                    refetch();
                }
            })
            .catch((error) => {
                console.error(error);

                // Enable the clicked button again in case of error
                setDisabledButtons((prevDisabledButtons) =>
                    prevDisabledButtons.filter((id) => id !== user._id)
                );
            });
    };

    const handleMakeInstructor = (user) => {
        // Disable the clicked button
        setDisabledButtons((prevDisabledButtons) => [...prevDisabledButtons, user._id]);

        fetch(`${import.meta.env.VITE_BASE_URL}/users/instructor/${user._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    Swal.fire("Success!", `${user.name} is now an instructor`, "success");
                    refetch();
                }
            })
            .catch((error) => {
                console.error(error);

                // Enable the clicked button again in case of error
                setDisabledButtons((prevDisabledButtons) =>
                    prevDisabledButtons.filter((id) => id !== user._id)
                );
            });
    };

    return (
        <div className="w-full">
             <Helmet>
                <title>SS | Dashboard | Manage User</title>
            </Helmet>
            <h1 className="text-3xl font-semibold my-6">Total Users {users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Role</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.number}</td>
                                <td>{user.role ? user.role : "user"}</td>
                                <td>
                                    <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn bg-warning text-sm"
                                        disabled={user.role === "admin" || disabledButtons.includes(user._id)}
                                    >
                                        Make Admin
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleMakeInstructor(user)}
                                        className="btn bg-primary text-sm"
                                        disabled={user.role === "instructor" || disabledButtons.includes(user._id)}
                                    >
                                        Make Instructor
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;
