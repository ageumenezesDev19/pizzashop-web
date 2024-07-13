import { api } from '@/lib/axios'

export interface GetMonthCanceledAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCanceledOrdersAmount() {
  const response = await api.get<GetMonthCanceledAmountResponse>(
    'metrics/month-canceled-orders-amount',
  )

  return response.data
}
