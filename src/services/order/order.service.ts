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