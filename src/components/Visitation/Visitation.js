function Visitation({date,reason,description}){

    return(
        <div>
            <h4>{date} - {reason}</h4>
            <p>{description}</p>
        </div>
    );
}

export default Visitation;