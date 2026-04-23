export interface Spot {
  id: string;
  lat: number;
  lng: number;
  title: string;
  timestamp: number;
  note?: string;
  trigger?: "WALK_IN" | "RECOMMENDATION" | "SEARCH" | "SAVED_PLACE" | "SNS";
  discoveryScore?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  photoUri?: string;
}

export interface Session {
  id: string;
  type: "MOVE" | "STAY";
  startedAt: number;
  endedAt?: number;
  spots: Spot[];
}

export interface Journey {
  id: string;
  title: string;
  sessions: Session[];
}
