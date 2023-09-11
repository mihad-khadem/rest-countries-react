import './country.css';
const Country = ({country}) => {
    const {name, flags} = country
    console.log(country);
    return (
        <div className="box">
            <img src={flags.png} alt="flag" />
            <h2>Name : {name.common}</h2>
        </div>
    );
};

export default Country;