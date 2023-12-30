import type { Airport } from "./airport";
import type { Location } from "./location";

export type CalculateRequest = Readonly<{
    from: Airport | null;
    to: Airport | null;
}>;
export type DistanceRequest = Readonly<{
    from: Location | null;
    to: Location | null;
}>;

export type DistanceResponse = Readonly<{
    value: number;
    units: string;
}>;