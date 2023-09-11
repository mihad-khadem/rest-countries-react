const Country = ({country}) => {
    const {name} = country
    console.log(country);
    return (
        <div>
            <h2>Name : {name.common}</h2>
        </div>
    );
};

export default Country;