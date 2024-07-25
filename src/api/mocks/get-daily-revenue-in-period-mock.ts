import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '21/07/2024', receipt: 2000 },
    { date: '22/07/2024', receipt: 200 },
    { date: '23/07/2024', receipt: 800 },
    { date: '24/07/2024', receipt: 1000 },
    { date: '25/07/2024', receipt: 1500 },
    { date: '26/07/2024', receipt: 300 },
    { date: '27/07/2024', receipt: 2200 },
  ])
})
