import RideImage from '../../assets//main carousel images/LEGO_Img1.jpg';
import RideCards from './RideCards';
import RideTable from './RideTable';
import './RideCards.css';

function ThemeParks() {
    // Define ride data
    const rides = [
        { name: "Ride 1", waitTime: "30 minutes" },
        { name: "Ride 2", waitTime: "20 minutes" },
        { name: "Ride 3", waitTime: "15 minutes" }
    ];

    return (
        <div className="theme-parks-container">
            <div className="cards-container">
                <RideCards
                    title="Theme Park Name"
                    imgSrc={RideImage}
                    text="Description"
                    buttonText="Add to favourites"
                />
            </div>
            <div className="ride-table">
                <h1>Ride Information</h1>
                <RideTable rides={rides} />
            </div>
        </div>
    );
}

export default ThemeParks;
