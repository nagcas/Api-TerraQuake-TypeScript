export namespace Earthquake {
  export interface Response {
    success: boolean;
    code: number;
    status: string;
    message: string;
    payload: Feature[];
    meta: MetaData;
    totalEarthquakes: number;
    pagination: Pagination;
  }

  export interface Feature {
    type: string; // "Feature"
    properties: Properties;
    geometry: Geometry;
    pagination: Pagination;
  }

  export interface Properties {
    eventId: number;
    originId: number;
    time: string; // ISO date string
    author: string;
    magType: string;
    mag: number;
    magAuthor: string;
    type: string; // "earthquake"
    place: string;
    version: number;
    geojson_creationTime: string; // ISO date string
  }

  export interface Geometry {
    type: string; // "Point"
    coordinates: [number, number, number]; // [longitude, latitude, depth]
  }

  export interface MetaData {
    method: string;
    path: string;
    timestamp: string; // ISO date string
  }

  export interface Pagination {
    page: number;
    totalPages: number;
    limit: number;
    hasMore: boolean;
  }
}
