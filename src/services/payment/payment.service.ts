import { instance } from "@/api/api.interceptor"

<<<<<<< HEAD

class PaymentService{
    async createPayment(amount: number) {
        return instance.post('/payment',
            {
                "amount": amount,
        })
    }
}
export default new PaymentService()
=======
class PaymentService {
	async createPayment(amount: number) {
		return instance.post('/payment', {
			amount: amount
		})
	}
}
export default new PaymentService()
>>>>>>> new-brunch
