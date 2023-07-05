<<<<<<< HEAD
import { instance } from "@/api/api.interceptor";
import { IOrder } from "@/interfaces/order.interface";


class OrderService{
    async getAll() {
        return instance<IOrder[ ]>({
            url: '/orders',
            method: 'get',
        })
    }
}
export default new OrderService;
=======
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
>>>>>>> new-brunch
