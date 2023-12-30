import { BaseService } from './base.service';
import type { Airport } from '../entity/airport';
import type { DistanceRequest, DistanceResponse } from '../entity/distance';

class DataService extends BaseService {
    private static _dataService: DataService;
    private static _controller: string = 'data';

    private constructor(name: string) {
        super(name);
    }

    public static get Instance(): DataService {
        return this._dataService || (this._dataService = new this(this._controller));
    }

    public async calculateAsync(entity: DistanceRequest): Promise<DistanceResponse> {
        const { data } = await this.$http.post<DistanceResponse>('/', entity);
        return data;
    }

    public async getAirportsAsync(query:string): Promise<Airport[]> {
        const { data } = await this.$http.get<Airport[]>(`/${query}`);
        return data;
    }
}

export const DataApi = DataService.Instance;
