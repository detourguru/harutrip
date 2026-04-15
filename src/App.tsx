import { Map, MapMarker, Polyline } from "react-kakao-maps-sdk";
import "./App.css";
import type { Session } from "./types/journeys";

const MOCK_SESSION: Session = {
  id: "1",
  date: "2024-04-15",
  spots: [
    {
      id: "a",
      lat: 37.5665,
      lng: 126.978,
      title: "시작점",
      type: "MOVING",
      timestamp: Date.now(),
    },
    {
      id: "b",
      lat: 37.5675,
      lng: 126.979,
      title: "중간",
      type: "STAY",
      timestamp: Date.now() + 1000,
    },
    {
      id: "c",
      lat: 37.5685,
      lng: 126.98,
      title: "도착점",
      type: "MOVING",
      timestamp: Date.now() + 2000,
    },
  ],
};

function App() {
  const linePath = MOCK_SESSION.spots.map((spot) => ({
    lat: spot.lat,
    lng: spot.lng,
  }));

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Map
        center={{ lat: 37.5665, lng: 126.978 }}
        style={{ width: "100%", height: "100%" }}
        level={3}
      >
        <Polyline
          path={[linePath]}
          strokeWeight={5}
          strokeColor={"#6B705C"}
          strokeOpacity={0.7}
          strokeStyle={"solid"}
        />

        {MOCK_SESSION.spots.map((spot) => (
          <MapMarker
            key={spot.id}
            position={{ lat: spot.lat, lng: spot.lng }}
            title={spot.title}
          />
        ))}
      </Map>
    </div>
  );
}

export default App;
