import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('200', { exact: true })).toBeVisible()
  expect(page.getByText('+7% em em relação a ontem')).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('500')).toBeVisible()
  expect(page.getByText('-5%em em relação ao mês')).toBeVisible()
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('120')).toBeVisible()
  expect(page.getByText('-9% em em relação ao mês passado')).toBeVisible()
})

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('R$ 8.000,00')).toBeVisible()
  expect(page.getByText('+$10% em em relação ao mês passado')).toBeVisible()

  await page.waitForTimeout(1000) // fix a bug
})
