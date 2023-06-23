import { instance } from "@/api/api.interceptor"
import { IStatistic } from "@/interfaces/statistic.interface"

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
