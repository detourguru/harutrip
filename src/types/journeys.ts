export interface Spot {
  id: string;
  lat: number;
  lng: number;
  title: string;
  type: "MOVING" | "STAY";
  timestamp: number;
}

export interface Session {
  id: string;
  date: string; // yyyy-mm-dd
  spots: Spot[];
}

export interface Journey {
  id: string;
  title: string;
  sessions: Session[];
}
