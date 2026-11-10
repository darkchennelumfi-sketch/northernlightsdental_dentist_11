import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/about/dr-chris-schmaltz",
  "/about/dr-neha-patel",
  "/about/dr-courtney-gieseke",
  "/services",
  "/services/general-exams-cleanings",
  "/services/sealants-fillings",
  "/services/dentures",
  "/services/crowns-bridges-veneers",
  "/services/implants-root-canals",
  "/services/gum-disease-treatment",
  "/services/tooth-whitening",
  "/services/kid-friendly-dentistry",
  "/new-patients",
  "/patient-forms",
  "/smile-gallery",
  "/virtual-tour",
  "/blog",
  "/blog/your-childs-dental-health-the-early-years",
  "/blog/star-discount-plan-for-patients-without-dental-insurance",
  "/blog/some-of-our-favorite-cases",
  "/faq",
  "/contact",
  "/pay-online",
];

for (const route of routes) {
  test(`route ${route} renders`, async ({ page }) => {
    const response = await page.goto(route, { waitUntil: "networkidle" });
    expect(response?.status(), `status for ${route}`).toBe(200);
    await expect(page.locator("h1").first()).toBeVisible();
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
    await expect(page).toHaveTitle(/Northern Lights Dental|Journal|Contact|FAQ|Pay|Virtual|Smile|Patient|New|About|Service|Dental/);

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, `horizontal overflow on ${route}`).toBeLessThanOrEqual(1);
  });
}

test("home page has working primary navigation", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "We love to see you smile",
  );
  await page.getByRole("button", { name: "Services" }).click();
  await page.getByRole("link", { name: "Explore all services" }).click();
  await expect(page).toHaveURL(/\/services$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "every smile",
  );
});

test("services filter works", async ({ page }) => {
  await page.goto("/services");
  await page.getByRole("tab", { name: "Cosmetic" }).click();
  await expect(page.getByText("Showing 2 services")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Professional Tooth Whitening" }),
  ).toBeVisible();
});

test("contact form validates and submits", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: /send request/i }).click();
  await expect(page.getByText("Please enter your name.")).toBeVisible();

  await page.getByLabel("Name *").fill("Test Patient");
  await page.getByLabel("Email *").fill("test@example.com");
  await page.getByLabel("Phone").fill("701-555-0100");
  await page.getByLabel("Subject *").fill("New patient visit");
  await page
    .getByLabel("Message *")
    .fill("I would like to schedule a first visit for my family.");
  await page.getByRole("button", { name: /send request/i }).click();
  await expect(page.getByText("Message received")).toBeVisible();
});

test("virtual tour switches between stops", async ({ page }) => {
  await page.goto("/virtual-tour");
  await expect(
    page.getByRole("heading", { name: "A calm first hello" }),
  ).toBeVisible();
  await page.getByRole("tab", { name: /Treatment room/ }).click();
  await expect(
    page.getByRole("heading", { name: "Comfortable treatment rooms" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Next tour stop" }).click();
  await expect(
    page.getByRole("heading", { name: "Room for every age" }),
  ).toBeVisible();
});

test("mobile menu opens and navigates", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("dialog").getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/about$/);
});

test("keyboard skip link is available", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
});
