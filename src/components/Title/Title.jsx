
const Title = ({heading , subHeading }) => {
    return (
        <div className="mx-auto text-center md:w-3/12 my-8 text-accent">
            <h4 className="text-2xl font-bold mb-2 text-secondary">🔹{subHeading}🔹</h4>
            <h3 className="text-3xl font-bold border-primary/50 border-y-4 py-4 text-accent">{heading}</h3>
         
            
        </div>
    );
};

export default Title;