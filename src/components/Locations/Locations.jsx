// import locationImg from "./../../assets/images/img-locations-background.webp";
import { locations } from "./../../data";
import {
  LocationHeading,
  LocationsDiv,
  SingleLocation,
} from "./LocationsStyles";

const Locations = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <LocationHeading>Locations</LocationHeading>
          {/* <img src={locationImg} alt="locations" /> */}
          <LocationsDiv className="Locations">
            {locations.map((location, index) => {
              const { address, street, building, city } = location;

              return (
                <SingleLocation key={index}>
                  <h3>{address}</h3>
                  <p>{street}</p>
                  <p>{building}</p>
                  <p>{city}</p>
                </SingleLocation>
              );
            })}
          </LocationsDiv>
        </div>
      </div>
    </div>
  );
};

export default Locations;
