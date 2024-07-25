import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John doe',
      email: 'john.doe@gmail.com',
      phone: '123123123123',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
