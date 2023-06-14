import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";


const PaymentHistory = () => {
    // fetch payment history from database
    const { user } = useAuth();
    const [paymentHistory, setPaymentHistory] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/enrolled/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPaymentHistory(data);
            })
    }, [user?.email])
    console.log(paymentHistory)

    const sortedTransactions = paymentHistory.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    return (
        <div>
         <Helmet>
                <title>SS | Dashboard | Payment History</title>
            </Helmet>
            <div className="w-full">

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr className="text-center">
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Transaction Id</th>
                                <th>Price</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                sortedTransactions.map((trans, index) => <tr key={trans._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={trans.enrolledClass.image} alt="Class image" />
                                        </div>
                                    </td>
                                    <td>{trans.enrolledClass.name}</td>
                                    <td>
                                        {trans.transactionId}
                                    </td>
                                    <td className="">${trans.price}</td>
                                    <td className="text-center">
                                        {trans.date}
                                    </td>
                                   
                                   
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;