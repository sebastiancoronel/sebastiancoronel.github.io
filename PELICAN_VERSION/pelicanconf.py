"""Pelican configuration for the PELICAN_VERSION portfolio site."""

import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import data

AUTHOR = "Sebastian Coronel"
SITENAME = "Sebastian Coronel"
SITEURL = ""

TIMEZONE = "America/Argentina/Buenos_Aires"
DEFAULT_LANG = "en"

# Where content lives
PATH = "content"
PAGE_PATHS = ["pages"]
ARTICLE_PATHS = ["articles"]
THEME = "theme"
OUTPUT_PATH = "output"

# We control URLs entirely via per-page `save_as`, so disable Pelican defaults,
# except for the blog index pages (one direct template per language).
DIRECT_TEMPLATES = ["blog", "blog_es"]
PAGE_URL = "{slug}/"
PAGE_SAVE_AS = "{slug}.html"

# Blog index pages: English at the root, Spanish under /es.
BLOG_URL = "/blog/"
BLOG_SAVE_AS = "blog/index.html"
BLOG_ES_URL = "/es/blog/"
BLOG_ES_SAVE_AS = "es/blog/index.html"

# Category landing pages live under the blog (e.g. /blog/pose-correction-series/).
CATEGORY_URL = "/blog/{slug}/"
CATEGORY_SAVE_AS = "blog/{slug}/index.html"

# Do not generate any feeds for this portfolio.
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
TRANSLATION_FEED_ATOM = None

# Articles inherit AUTHOR as their author; we don't publish author pages.
AUTHOR_SAVE_AS = ""
AUTHOR_URL = ""

# Content / output behaviour
DELETE_OUTPUT_DIRECTORY = True
USE_FOLDER_AS_CATEGORY = False
DEFAULT_DATE = (2026, 9, 9)
MARKDOWN = {"extension_configs": {"markdown.extensions.extra": {}}}
RELATIVE_URLS = False

# Static files placed at the output root (robots.txt, sitemap.xml)
STATIC_PATHS = ["extra"]
EXTRA_PATH_METADATA = {
    "extra/robots.txt": {"path": "robots.txt"},
    "extra/sitemap.xml": {"path": "sitemap.xml"},
}

# Make the content data available to every template.
JINJA_GLOBALS = {"data": data}

# (Optional) template variables helpers
JINJA_FILTERS = {"t": data.label}
