import { test, expect } from '@playwright/test';

test('OpenWeather create APIKey', async ({ page }) => {
  await page.goto('https://openweathermap.org/');

  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Email').click();

  await page.getByLabel('Email').fill('minionmatbua@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12345678');
  await page.getByRole('button', { name: 'Submit' }).click();

  await page.locator('#user-dropdown').getByText('Test').click();
  await page.getByRole('link', { name: 'My API keys' }).click();
  await page.getByPlaceholder('API key name').click();
  
  await page.getByPlaceholder('API key name').fill('test');
  await page.getByRole('button', { name: 'Generate' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: '' }).nth(1).click();
});