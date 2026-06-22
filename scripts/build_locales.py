#!/usr/bin/env python3
"""Build i18n locale files from high-quality reference templates."""
import re
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MESSAGES = ROOT / "src" / "i18n" / "messages"


def extract_strings(content: str) -> list[str]:
    return re.findall(r'"((?:[^"\\]|\\.)*)"', content)


def replace_strings(content: str, new_strings: list[str]) -> str:
    i = [0]

    def repl(_m: re.Match) -> str:
        s = new_strings[i[0]]
        i[0] += 1
        s = s.replace("\\", "\\\\").replace('"', '\\"')
        return f'"{s}"'

    result = re.sub(r'"((?:[^"\\]|\\.)*)"', repl, content)
    if i[0] != len(new_strings):
        raise ValueError(f"Expected {len(new_strings)} strings, replaced {i[0]}")
    return result


def build(template: str, export_name: str, translations: list[str]) -> str:
    content = (MESSAGES / template).read_text()
    content = re.sub(r"export const \w+ =", f"export const {export_name} =", content)
    content = re.sub(r"export default \w+;", f"export default {export_name};", content)
    return replace_strings(content, translations)


def load_translations(name: str) -> list[str]:
    data = json.loads((Path(__file__).parent / "translations" / f"{name}.json").read_text())
    return data


def main() -> None:
    builds = [
        ("da.ts", "fi", "fi"),
        ("de.ts", "cs", "cs"),
        ("ru.ts", "uk", "uk"),
        ("en.ts", "id", "id"),
        ("en.ts", "ms", "ms"),
    ]
    en_strings = extract_strings((MESSAGES / "en.ts").read_text())
    for template, export_name, trans_name in builds:
        translations = load_translations(trans_name)
        if len(translations) != len(en_strings):
            raise ValueError(f"{trans_name}: expected {len(en_strings)} strings, got {len(translations)}")
        out = build(template, export_name, translations)
        (MESSAGES / f"{export_name}.ts").write_text(out)
        print(f"Wrote {export_name}.ts ({len(translations)} strings)")


if __name__ == "__main__":
    main()
