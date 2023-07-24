import './FlightInfoCell.styles.scss';

export default function FlightInfoCell({row}){
    return (
        <div className="flight-info card">
            <div className="first-col">
                <div className="origin flight-detail">
                    <span className="time">{row.departureDateTimeDisplay}</span>
                    <span className="airport-code">{row.originAirport?.code}</span>
                    <span className="city">{row.originAirport?.city?.name}</span>
                </div>
                <div className="line" />
                <div className="destination flight-detail">
                    <span className="time">{row.arrivalDateTimeDisplay}</span>
                    <span className="airport-code">{row.destinationAirport?.code}</span>
                    <span className="city">{row.destinationAirport?.city?.name}</span>
                </div>
            </div>

            <div className="flight-duration">
                <span className="title">Uçuç Süresi</span>
                <span className="value">{row?.flightDuration}</span>
            </div>
        </div>
    )
}