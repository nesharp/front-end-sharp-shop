import { IStatistic } from '@/interfaces/statistic.interface'

import { instance } from '@/api/api.interceptor'

class StatisticService {
	async getStatistic(id: number) {
		return instance<IStatistic[]>({
			url: '/statistic',
			method: 'get',
			data: {
				id: id
			}
		})
	}
}
export default new StatisticService()
