import fs from "fs";
import { fileURLToPath } from "url";

const root = fileURLToPath(new URL("../", import.meta.url));

function loadLocale(name) {
  const raw = fs.readFileSync(`${root}/src/i18n/messages/${name}.ts`, "utf8");
  return eval("(" + raw.replace(/^export const \w+ = /, "").replace(/ as const;[\s\S]*/, "") + ")");
}

const en = loadLocale("en");

const KEEP = new Set([
  "InfraSphere Network",
  "InfraSphere",
  "Network",
  "TVK Group",
  "SOVRA",
  "EnteleKRON",
  "EnergieMIND",
  "infrasphere.network",
  "Email",
  "GPU · Edge · Data Centers",
  "Container · Prefab · Mobile",
  "Automation · Monitoring",
  "Storage · Grid · Renewables",
  "Research · Development · Pilot Preparation",
  "TVK Group · InfraSphere Network",
  "TVK Ecosystem · Infrastructure Layer",
  "R&D",
  "OT/IT",
  "PUE",
  "EPC",
  "IoT",
  "GPU",
]);

function cloneTranslate(obj, map) {
  if (typeof obj === "string") {
    if (KEEP.has(obj)) return obj;
    const t = map[obj];
    if (!t) throw new Error(`Missing translation: ${obj.slice(0, 80)}`);
    return t;
  }
  if (Array.isArray(obj)) return obj.map((v) => cloneTranslate(v, map));
  if (obj && typeof obj === "object") {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, cloneTranslate(v, map)]));
  }
  return obj;
}

function serialize(obj, indent = 0) {
  const sp = "  ".repeat(indent);
  if (typeof obj === "string") return JSON.stringify(obj);
  if (Array.isArray(obj)) {
    if (obj.every((v) => typeof v === "string" && v.length < 60 && !v.includes("\n"))) {
      return "[\n" + obj.map((v) => `${sp}  ${JSON.stringify(v)},`).join("\n") + `\n${sp}]`;
    }
    return "[\n" + obj.map((v) => `${sp}  ${serialize(v, indent + 1)},`).join("\n") + `\n${sp}]`;
  }
  const entries = Object.entries(obj);
  const multiline = entries.some(([, v]) => typeof v === "string" && (v.includes("\n") || v.length > 72));
  if (!multiline && indent > 0) {
    const inner = entries.map(([k, v]) => `${k}: ${serialize(v, indent + 1)}`).join(", ");
    return `{ ${inner} }`;
  }
  return (
    "{\n" +
    entries.map(([k, v]) => `${sp}  ${k}: ${serialize(v, indent + 1)},`).join("\n") +
    `\n${sp}}`
  );
}

function writeLocale(loc, map) {
  const translated = cloneTranslate(en, map);
  const content = `export const ${loc} = ${serialize(translated)} as const;\n\nexport default ${loc};\n`;
  fs.writeFileSync(`${root}/src/i18n/messages/${loc}.ts`, content);
  console.log("wrote", loc, Object.keys(map).length, "entries");
}

const maps = JSON.parse(fs.readFileSync(`${root}/scripts/maps/hi-pl-sv-no.json`, "utf8"));
for (const loc of ["hi", "pl", "sv", "no"]) {
  writeLocale(loc, maps[loc]);
}
