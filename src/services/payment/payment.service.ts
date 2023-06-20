import { instance } from "@/api/api.interceptor"


class PaymentService{
    async createPayment(amount: number) {
        return instance.post('/payment',
            {
                "amount": amount,
        })
    }
}
export default new PaymentService()
