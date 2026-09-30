#!/usr/bin/env python3
"""
Hack Club Haven — Static Component Assembler (< 100 Lines)
Assembles modular HTML files in components/ into a single production index.html.
Usage: python build.py
"""

import os

OUTPUT_FILE = "index.html"

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>Haven Jakarta — Weekend Game Jam for High Schoolers! (Nov 14–15, 2026)</title>
  <meta name="description" content="Hack Club Haven Jakarta — A weekend game jam for middle and high school students in Jakarta on November 14–15, 2026. 100% Free with food, swag, and workshops provided!" />
  <meta name="theme-color" content="#b8c220" />
  <meta property="og:title" content="Haven Jakarta — Weekend Game Jam for High Schoolers!" />
  <meta property="og:description" content="The biggest weekend game jam for middle and high school students in Jakarta on November 14–15, 2026. 100% Free with food and swag provided!" />
  <meta property="og:image" content="assets/logo.png" />
  <meta property="og:type" content="website" />
  <link rel="icon" type="image/png" href="assets/logo.png" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@600;700;800&family=Fredoka:wght@600;700&family=Mali:ital,wght@0,500;0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css?v=13" />
</head>
<body class="storybook-body">
  <!-- Shared SVG Symbols Manifest (Ultra-crisp & zero markup redundancy) -->
  <svg style="display:none;" xmlns="http://www.w3.org/2000/svg">
    <symbol id="icon-hcb" viewBox="0 0 48 48">
      <path d="M12 21L24 11L36 21" stroke="white" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <line x1="17" y1="24" x2="17" y2="33" stroke="white" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="24" y1="24" x2="24" y2="33" stroke="white" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="31" y1="24" x2="31" y2="33" stroke="white" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="11" y1="37" x2="37" y2="37" stroke="white" stroke-width="4.5" stroke-linecap="round"/>
    </symbol>
    <symbol id="icon-chevron" viewBox="0 0 24 24">
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="currentColor"/>
    </symbol>
  </svg>

  <div class="autumn-leaves-overlay" aria-hidden="true">
    <span class="leaf l1">🍂</span><span class="leaf l2">🍁</span><span class="leaf l3">🍂</span><span class="leaf l4">🍁</span><span class="leaf l5">🍃</span>
  </div>

  <div class="full-page-layout">
{{HEADER}}

    <main>
{{HERO}}

{{ABOUT}}

{{STEPS}}

{{PAST_EVENTS}}

{{SUPPORTERS}}

{{FAQ}}

{{CTA}}
    </main>

{{FOOTER}}
  </div>

{{MODAL}}

  <!-- Scripts -->
  <script src="js/nav.js"></script>
  <script src="js/schedule.js"></script>
  <script src="js/faq.js"></script>
  <script src="js/modal.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
"""

def read_component(filepath):
    if not os.path.exists(filepath):
        print(f"Warning: {filepath} not found!")
        return ""
    with open(filepath, "r", encoding="utf-8") as f:
        return f.read().strip()

def build():
    output_html = HTML_TEMPLATE
    replacements = {
        "{{HEADER}}": read_component("components/nav.html"),
        "{{HERO}}": read_component("components/hero.html"),
        "{{ABOUT}}": read_component("components/about.html"),
        "{{STEPS}}": read_component("components/steps.html"),
        "{{PAST_EVENTS}}": read_component("components/past_events.html"),
        "{{SUPPORTERS}}": read_component("components/supporters.html"),
        "{{FAQ}}": read_component("components/faq.html"),
        "{{CTA}}": read_component("components/cta_banner.html"),
        "{{FOOTER}}": read_component("components/footer.html"),
        "{{MODAL}}": read_component("components/modal.html")
    }

    for placeholder, code in replacements.items():
        output_html = output_html.replace(placeholder, code)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(output_html)

    line_count = len(output_html.splitlines())
    print(f"Build complete! Output: {OUTPUT_FILE} ({line_count} lines)")

if __name__ == "__main__":
    build()
