import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { singInMock } from './sing-in-mock'

export const worker = setupWorker(singInMock)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
