import usePopularInstructor from "../../hooks/usePopularInstructor";
import Container from "../Shared/Container";
import Title from "../Title/Title";
import { motion } from "framer-motion"


const PopularInstructor = () => {
    const PreviewAnimation = {
        initial: {
            y: 30,
            opacity: 0,
            scale: 0.9
        },
        animate: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                ease: [0.6, 0.01, 0.05, 0.95],
                duration: 0.8,
            }
        }
    }
    const [instructors] = usePopularInstructor();
    console.log(instructors)
    return (

        <div className="my-20">

            <Title heading="Instructors" subHeading="Our Popular Instructors"></Title>
                <motion.div
                    className=" mx-6 lg:mx-20 lg:pl-8"
                    initial="initial"
                    whileInView="animate"
                    variants={PreviewAnimation}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
                        {
                            instructors.map((instructor, index) => (
                         
                                <div>
                                <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                                  <img
                                    className="absolute object-cover w-full h-full rounded-md"
                                    src={instructor.photoURL}
                                    alt="Person"
                                  />
                                </div>
                                <div className="flex flex-col">
                                <h2 className="card-title text-xl">{instructor.name}</h2>
                                <h2 className="card-title text-lg">{instructor?.email}</h2>
                                        {/* <h2 className="">Total class: {instructor.numberOfClasses}</h2> */}
                                       
                                        <h2 className="">Classes Taken:</h2>
                                        <ul>
                                            <li>{instructor.classes}</li>
                                        </ul>
                                </div>
                              </div>
                            ))
                        }


                    </div>
                </motion.div>

        </div >

    );
};

export default PopularInstructor;