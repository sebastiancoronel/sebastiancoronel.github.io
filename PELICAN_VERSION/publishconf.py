"""Production settings used to publish the site (GitHub Pages)."""

import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from pelicanconf import *  # noqa: F401,F403

SITEURL = "https://sebastiancoronel.github.io"
RELATIVE_URLS = False

DELETE_OUTPUT_DIRECTORY = True

FEED_ALL_ATOM = "feeds/all.atom.xml"
CATEGORY_FEED_ATOM = "feeds/{slug}.atom.xml"
