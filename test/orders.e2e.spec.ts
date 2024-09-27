import { test, expect } from "@playwright/test";

test("list orders", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await expect(
    page.getByRole("cell", { name: "cliente 1", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "cliente 10", exact: true }),
  ).toBeVisible();
});

test("pagination orders", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Próxima página" }).click();
  await expect(
    page.getByRole("cell", { name: "cliente 11", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "cliente 20", exact: true }),
  ).toBeVisible();

  await page.getByRole("button", { name: "Última página" }).click();
  await expect(
    page.getByRole("cell", { name: "cliente 51", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "cliente 60", exact: true }),
  ).toBeVisible();

  await page.getByRole("button", { name: "Página anterior" }).click();
  await expect(
    page.getByRole("cell", { name: "cliente 41", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "cliente 50", exact: true }),
  ).toBeVisible();

  await page.getByRole("button", { name: "Primeira página" }).click();
  await expect(
    page.getByRole("cell", { name: "cliente 1", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "cliente 10", exact: true }),
  ).toBeVisible();
});

test("filter by order id", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByPlaceholder("ID do pedido").fill("000000011");
  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  await expect(page.getByRole("cell", { name: "000000011" })).toBeVisible();
});

test("filter by name", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByPlaceholder("Nome do cliente").fill("cliente 11");
  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  await expect(page.getByRole("cell", { name: "cliente 11" })).toBeVisible();
});

test("filter by status", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("combobox").click();
  await page.getByLabel("Pendente").click();

  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  await expect(page.getByRole("cell", { name: "Pendente" })).toHaveCount(10);
});
