import { instance } from "@/api/api.interceptor"
import { IReview, IReviewDto } from "@/interfaces/review.interface"

class ReviewService {
	async getAll() {
		return instance<IReview[]>({
			url: '/reviews',
			method: 'GET'
		})
	}
	async leave(id: string | number, data: IReviewDto) {
		
		const response = instance<IReview[]>({
			url: `/reviews/leave/${id}`,
			method: 'post',
			data: data
		})
		return response
	}
	async getAverageRating(id: number | string) {
		return instance<number>({
			url: `/reviews/average/${id}`,
			method: 'get'
		})
	}
}
export default new ReviewService()