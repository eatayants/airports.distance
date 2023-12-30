import type { ComponentType } from 'react';
import type { Params } from 'react-router-dom';
import { Home } from '../containers';

export const TRANSITION_DEFAULT = {
    classNames: 'fade',
    timeout: { enter: 250, exit: 250 }
};

export type RouteComponent = ComponentType<any>;
export type Transition = typeof TRANSITION_DEFAULT;

export type Route = Readonly<{
    title?: string;
    name: string;
    path: string;
    showInNav?: boolean;
    transition: Transition;
    Component: RouteComponent;
    params?: Readonly<Params<string>>;
}>;

export const Routes: Route[] = [
    {
        path: '/',       
        name: 'home',
        title:'Airports.Distance',
        Component: Home,
        transition: TRANSITION_DEFAULT
    }
];