import { test, expect } from '@playwright/test';

test('OpenWeather Login', async ({ page }) => {

  await page.goto('https://openweathermap.org/');

  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('minionmatbua@gmail.com');

  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12345678');
  
  await page.getByRole('button', { name: 'Submit' }).click();

  await page.close();
});