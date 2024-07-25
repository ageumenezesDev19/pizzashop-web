import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '21/07/2024', receipt: 200000 },
    { date: '22/07/2024', receipt: 20000 },
    { date: '23/07/2024', receipt: 80000 },
    { date: '24/07/2024', receipt: 100000 },
    { date: '25/07/2024', receipt: 150000 },
    { date: '26/07/2024', receipt: 30000 },
    { date: '27/07/2024', receipt: 220000 },
  ])
})
