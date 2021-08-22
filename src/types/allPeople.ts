type PageInfo = {
  hasNextPage: boolean;
  endCursor: string;
};

type Species = {
  name: string;
};

type Homeworld = {
  name: string;
};

type Vehicle = {
  id: string;
  name: string;
};

export type Person = {
  id: string;
  name: string;
  eyeColor: string;
  hairColor: string;
  skinColor: string;
  birthYear: string;
  gender: string;
  height: number;
  mass: number;
  species: Species | null;
  homeworld: Homeworld;
  vehicleConnection: {
    vehicles: Vehicle[];
  };
};

export type AllPeopleInfo = {
  pageInfo: PageInfo | null;
  totalCount: number;
  people: Person[];
};

export type AllPeopleQuery = {
  allPeople: AllPeopleInfo;
};

export type PersonQuery = {
  person: Person;
};

export interface AllPeopleState extends AllPeopleInfo {
  personSelected: Person | null;
  loading: boolean;
  error: string | null;
}
