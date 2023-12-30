import type { Location } from "./location";

export type Airport = Readonly<{
    id: string;
    title: string;
    location: Location;
}>;