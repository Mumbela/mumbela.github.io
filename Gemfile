# frozen_string_literal: true

source "https://rubygems.org"

# gem "rails"

gem "jekyll", "~> 4.4"

#gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-paginate-v2", "~> 3.0"
  gem "jekyll-archives", "~> 2.3"
end

# Windows and JRuby support (optional, safe to keep)
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo-data"
end

# File-watching performance on Windows
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock http_parser.rb on JRuby
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

gem "webrick", "~> 1.9"
