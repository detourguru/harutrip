import { Map, MapMarker, Polyline } from "react-kakao-maps-sdk";
import "./App.css";
import type { Journey } from "./types/journeys";
import { BottomNav } from "./components/BottomNav";

const MOCK_JOURNEY: Journey = {
  id: "journey-chuncheon-001",
  title: "춘천: 안목의 재발견",
  sessions: [
    {
      id: "session-moving-1",
      type: "MOVE",
      startedAt: new Date("2026-04-22T13:00:00").getTime(),
      endedAt: new Date("2026-04-22T13:40:00").getTime(),
      spots: [
        {
          id: "spot-1",
          lat: 37.8634,
          lng: 127.7231,
          title: "남춘천역 도착",
          timestamp: new Date("2026-04-22T13:05:00").getTime(),
          note: "경춘선의 끝자락. 공기가 서울보다 확실히 서늘하다.",
          trigger: "WALK_IN",
          discoveryScore: 5,
        },
        {
          id: "spot-2",
          lat: 37.872,
          lng: 127.731,
          title: "효자동 벽화마을 입구",
          timestamp: new Date("2026-04-22T13:30:00").getTime(),
          note: "우연히 튼 골목에서 만난 오래된 페인트 질감.",
          trigger: "WALK_IN",
          discoveryScore: 8,
        },
      ],
    },
    {
      id: "session-stay-1",
      type: "STAY",
      startedAt: new Date("2026-04-22T14:00:00").getTime(),
      endedAt: new Date("2026-04-22T15:30:00").getTime(),
      spots: [
        {
          id: "spot-3",
          lat: 37.8812,
          lng: 127.7298,
          title: "육림고개 빈티지 커피",
          timestamp: new Date("2026-04-22T14:15:00").getTime(),
          note: "10점 만점의 안목. 나무 가구의 에이징이 완벽함.",
          trigger: "SEARCH",
          discoveryScore: 10,
        },
      ],
    },
    {
      id: "session-moving-2",
      type: "MOVE",
      startedAt: new Date("2026-04-22T17:00:00").getTime(),
      endedAt: new Date("2026-04-22T18:00:00").getTime(),
      spots: [
        {
          id: "spot-4",
          lat: 37.8745,
          lng: 127.7123,
          title: "공지천 조각공원",
          timestamp: new Date("2026-04-22T17:10:00").getTime(),
          note: "해질녘 윤슬이 미쳤음. 러닝하기 딱 좋은 온도.",
          trigger: "RECOMMENDATION",
          discoveryScore: 9,
        },
        {
          id: "spot-5",
          lat: 37.885,
          lng: 127.705,
          title: "소양강 스카이워크",
          timestamp: new Date("2026-04-22T17:50:00").getTime(),
          note: "러닝 마무리 포인트. 시야가 확 트인다.",
          trigger: "WALK_IN",
          discoveryScore: 7,
        },
      ],
    },
  ],
};

function App() {
  const moveSession = MOCK_JOURNEY.sessions.filter(
    (ses) => ses.type === "MOVE",
  );
  const staySession = MOCK_JOURNEY.sessions.filter(
    (ses) => ses.type === "STAY",
  );

  const linePath = moveSession.flatMap((move) =>
    move.spots.map((spot) => ({
      lat: spot.lat,
      lng: spot.lng,
    })),
  );

  return (
    <div className="flex flex-col w-full h-screen">
      <main className="flex-1 relative">
        <Map
          center={{ lat: 37.5665, lng: 126.978 }}
          className="size-full"
          level={3}
        >
          <Polyline
            path={[linePath]}
            strokeWeight={5}
            strokeColor={"#6B705C"}
            strokeOpacity={0.7}
            strokeStyle={"solid"}
          />

          {staySession.flatMap((stay) =>
            stay.spots.map((spot) => (
              <MapMarker
                key={spot.id}
                position={{ lat: spot.lat, lng: spot.lng }}
                title={spot.title}
              />
            )),
          )}
        </Map>
      </main>
      <BottomNav />
    </div>
  );
}

export default App;
