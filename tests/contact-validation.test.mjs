import assert from "node:assert/strict";
import test from "node:test";
import { contactSchema } from "../lib/contact.ts";
const valid = { name: "Mauricio", email: "hello@example.com", message: "A real project inquiry." };
test("normalizes valid inquiries with optional fields omitted", () => {
  const result = contactSchema.parse({ ...valid, name: " Mauricio ", email: " hello@example.com " });
  assert.equal(result.name, "Mauricio"); assert.equal(result.email, "hello@example.com");
});
test("rejects malformed bodies and emails before sending", () => {
  for (const input of [null, undefined, [], "text", {}, { ...valid, email: "not-an-email" }]) assert.equal(contactSchema.safeParse(input).success, false);
});
test("rejects whitespace names, short messages and oversized payloads", () => {
  for (const input of [{ ...valid, name: "   " }, { ...valid, message: "short" }, { ...valid, message: "x".repeat(10001) }, { ...valid, company: "x".repeat(201) }]) assert.equal(contactSchema.safeParse(input).success, false);
});
test("accepts offered budget ranges and rejects forged values", () => {
  for (const budget of ["", "<5k", "5k-15k", "15k-50k", "50k+"]) assert.equal(contactSchema.safeParse({ ...valid, budget }).success, true);
  assert.equal(contactSchema.safeParse({ ...valid, budget: "unknown" }).success, false);
});
