import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const MyClassroom = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [] } = useQuery(["classes"], async () => {
        const res = await axiosSecure.get(`/classes/${user?.email}`);
        return res.data;
    });
    console.log(classes)
    return (
        <div>
             <Helmet>
                <title>SS | Dashboard | My Classroom</title>
            </Helmet>
           <div className="w-full">
            <h1 className="text-3xl font-semibold my-6">Total Classes {classes.length}</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Enrolled Students</th>
                            <th>Status</th>
                            <th>Admins Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((classItem, index) => (
                            <tr key={classItem._id}>
                                <th>{index + 1}</th>
                                <td>{classItem.name}</td>
                                <td>{classItem.price}</td>
                                <td>{classItem.availableSeats}</td>
                                <td>{classItem.numberOfStudents}</td>
                                <td>{classItem.status}</td>

                                <td>{classItem?.feedback ? classItem.feedback : "" }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default MyClassroom;