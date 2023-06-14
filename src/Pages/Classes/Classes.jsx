import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { postSelectedClasses } from "../../API/class";
import Container from "../../components/Shared/Container";
import Title from "../../components/Title/Title";
import useAuth from "../../hooks/useAuth";

const Classes = () => {
    const [approvedClasses, setApprovedClasses] = useState([]);
    const {user, role } = useAuth();
   console.log(role)
const navigate = useNavigate();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/approved-classes`)
            .then((res) => res.json())
            .then((data) => {
                setApprovedClasses(data);
            });
    }, []);


    const handleSelected = (classItem) => {
        if (!user) {
            Swal.fire({
                icon: "error",
                title: "You need to login first",
                text: "Please login first",

            });
            navigate('/login')
            return;
        }
        const userEmail = user.email;
        classItem.userEmail = userEmail;
        classItem.userName = user.displayName;
        classItem.classId = classItem._id;
        delete classItem._id;
        postSelectedClasses(classItem)
            
            .then((data) => {
                if(data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Class selected ",
                    });
                }
                        
            });

    }

    return (
        <div className="mb-20">
               <Helmet>
                <title>Sporty | Classes</title>
            </Helmet>
            <Title heading="All Classes"></Title>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    {approvedClasses.map((classItem) => (
                        <div
                            key={classItem._id}
                            className={`card lg:card-side rounded-md ${classItem.availableSeats === 0 ? 'bg-red-500 dark:bg-red-500' : 'bg-base-300'
                                } shadow-xl`}
                        >
                            <div className="card-body">
                                <h2 className="card-title text-3xl font-serif text-secondary/80">
                                    {classItem.name}
                                </h2>
                                <p className="text-2xl font-semibold">Instructor: {classItem.instructor}</p>
                                <p>Available Seats: {classItem.availableSeats}</p>
                                <p>Price: ${classItem.price}</p>
                                <div className=" justify-start">
                                    {classItem.availableSeats === 0 || role==="instructor" || role==="admin" ? (
                                        <button className="btn btn-disabled" disabled>
                                            Select
                                        </button>
                                    ) : (
                                        <button onClick={()=>handleSelected(classItem)} className="btn btn-secondary">Select</button>
                                    )}
                                </div>
                            </div>
                            <figure>
                                <img
                                    className="w-[400px] h-[400px]"
                                    src={classItem.image}
                                    alt="Class"
                                />
                            </figure>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Classes;
