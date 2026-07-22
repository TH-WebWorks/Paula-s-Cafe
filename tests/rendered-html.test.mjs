import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("build output exists", async () => {
  await access(new URL(".next/BUILD_ID", projectRoot));
});

test("home page source includes key site content", async () => {
  const page = await readFile(new URL("app/page.tsx", projectRoot), "utf8");

  assert.match(page, /Paula.s Cafe/);
  assert.match(page, /524 Elm Street/);
  assert.match(page, /Valley Junction/);
  assert.match(page, /\/counter\.webp/);
});

test("layout defines open graph metadata", async () => {
  const layout = await readFile(new URL("app/layout.tsx", projectRoot), "utf8");

  assert.match(layout, /metadataBase/);
  assert.match(layout, /\/og\.png/);
  assert.doesNotMatch(layout, /chatgpt|oai-authenticated/i);
});
