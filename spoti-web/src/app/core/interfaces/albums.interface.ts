export interface AlbumResponse {
  href:     string;
  items:    Item[];
  limit:    number;
  next:     string;
  offset:   number;
  previous: null;
  total:    number;
}

export interface Item {
  album_group:            AlbumGroup;
  album_type:             AlbumGroup;
  artists:                Artist[];
  available_markets:      string[];
  external_urls:          ExternalUrls;
  href:                   string;
  id:                     string;
  images:                 Image[];
  name:                   string;
  release_date:           Date;
  release_date_precision: ReleaseDatePrecision;
  total_tracks:           number;
  type:                   AlbumGroup;
  uri:                    string;
}

export enum AlbumGroup {
  Album = "album",
}

export interface Artist {
  external_urls: ExternalUrls;
  href:          string;
  id:            ID;
  name:          Name;
  type:          Type;
  uri:           URI;
}

export interface ExternalUrls {
  spotify: string;
}

export enum ID {
  The1QHStDLIc8UV7HvTG6FGRJ = "1qHStDLIc8uV7hvTG6FGRJ",
  The2Ye2Wgw4GimLv2EAKyk1NB = "2ye2Wgw4gimLv2eAKyk1NB",
  The42TFhl7WlMRXiNqzSrnzPL = "42TFhl7WlMRXiNqzSrnzPL",
}

export enum Name {
  LouReed = "Lou Reed",
  Metallica = "Metallica",
  SANFranciscoSymphony = "San Francisco Symphony",
}

export enum Type {
  Artist = "artist",
}

export enum URI {
  SpotifyArtist1QHStDLIc8UV7HvTG6FGRJ = "spotify:artist:1qHStDLIc8uV7hvTG6FGRJ",
  SpotifyArtist2Ye2Wgw4GimLv2EAKyk1NB = "spotify:artist:2ye2Wgw4gimLv2eAKyk1NB",
  SpotifyArtist42TFhl7WlMRXiNqzSrnzPL = "spotify:artist:42TFhl7WlMRXiNqzSrnzPL",
}

export interface Image {
  height: number;
  url:    string;
  width:  number;
}

export enum ReleaseDatePrecision {
  Day = "day",
}
