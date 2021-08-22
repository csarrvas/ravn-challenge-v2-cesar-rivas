type PageInfo = {
  hasNextPage: boolean;
  endCursor: string;
};

type Species = {
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
  vehicleConnection: {
    vehicles: Vehicle[];
  };
};

export type AllPeopleQuery = {
  pageInfo: PageInfo | null;
  totalCount: number;
  people: Person[];
};

export interface AllPeopleState extends AllPeopleQuery {
  personSelected: Person | null;
  loading: boolean;
  error: string | null;
}
