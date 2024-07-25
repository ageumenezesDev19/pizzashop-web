import { http, HttpResponse } from 'msw'

import { getPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  getPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 01', amount: 50 },
    { product: 'Pizza 02', amount: 30 },
    { product: 'Pizza 03', amount: 40 },
    { product: 'Pizza 04', amount: 10 },
    { product: 'Pizza 05', amount: 60 },
  ])
})
