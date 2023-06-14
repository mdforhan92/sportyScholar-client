
import './style.css'
const Switch = () => {
    return (
        <>
            <input type="checkbox" id="toggle" className="toggle--checkbox" />
            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background" />
            </label>
            <div className="background" />
        </>
    );
};

export default Switch;