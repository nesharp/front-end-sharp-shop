import { instance } from "@/api/api.interceptor"
import { IReview } from "@/interfaces/review.interface"

<<<<<<< HEAD

class ReviewsService {
    async getAll() {
        return instance<IReview[]>({
            url: '/reviews',
            method: 'GET'
        })
    }
    async leave(id: string | number, data: IReview) {
        return instance<IReview[]>({
            url: `/reviews/leave/${id}`,
            method: 'post',
            data: data
        })
    }
    async getAverageRating(id: number | string) {
        return instance<number>({
            url: `/reviews/average/${id}`,
            method: 'get'
        })
    }
}
export default new ReviewsService()
=======
class ReviewService {
	async getAll() {
		return instance<IReview[]>({
			url: '/reviews',
			method: 'GET'
		})
	}
	async leave(id: string | number, data: IReview) {
		return instance<IReview[]>({
			url: `/reviews/leave/${id}`,
			method: 'post',
			data: data
		})
	}
	async getAverageRating(id: number | string) {
		return instance<number>({
			url: `/reviews/average/${id}`,
			method: 'get'
		})
	}
}
export default new ReviewService()
>>>>>>> new-brunch
