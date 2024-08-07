import { http, HttpResponse } from 'msw'

import { AproveOrderParams } from '../aprove-order'

export const aproveOrderMock = http.patch<AproveOrderParams, never, never>(
  '/orders/:orderId/approve',
  async ({ params }) => {
    if (params.orderId === 'error-order-id') {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 204 })
  },
)
