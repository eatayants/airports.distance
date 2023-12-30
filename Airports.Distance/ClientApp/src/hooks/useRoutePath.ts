
import { Routes } from '../config';

const useRoutePath = (name: string): string => {
    return Routes.find((x) => x.name === name)?.path ?? "";
};

export default useRoutePath;