import { IOrder } from '@/interfaces/order.interface'

import { instance } from '@/api/api.interceptor'

class OrderService {
	async getAll() {
		return instance<IOrder[]>({
			url: '/category',
			method: 'GET'
		})
	}
}
export default new OrderService()
