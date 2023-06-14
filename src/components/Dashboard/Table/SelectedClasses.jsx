
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import MyClassTable from "./MyClassTable";

const SelectedClasses = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(["selected"], async () => {
        const res = await axiosSecure.get(`/classes/selected/${user?.email}`);
        return res.data;
    });
    console.log(classes)

    // delete a class by id
    const deleteClass = (id) => {
        console.log(id)
        axiosSecure.delete(`/classes/selected/${id}`)
            .then((res) => {
                if (res.data.deletedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Deleted",
                        text: "Class deleted successfully",

                    })
                    refetch();
                }
            });
    }

   const  handlePay = (id) => {
        console.log("pay" , id)
        navigate(`/dashboard/payment/${id}`)
    }
    return (
        <div>
               <Helmet>
                <title>SS | Dashboard | Selected Class</title>
            </Helmet>
       <MyClassTable 
       refetch={refetch}
       classes={classes}
       deleteClass={deleteClass}
       handlePay={handlePay}
        />
        </div>
    );
};

export default SelectedClasses;