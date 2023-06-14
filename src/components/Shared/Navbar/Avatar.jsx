
import useAuth from "../../../hooks/useAuth";

const Avatar = () => {
    const { user } = useAuth();
    return (
        <img className='rounded-full'
            src={user && user.photoURL ? user.photoURL : ''}
            alt="profile"
            height="30px"
            width="30px" />
    );
};

export default Avatar;