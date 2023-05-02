source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.1.2"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.0.4", ">= 7.0.4.3"
gem 'date', '~> 3.3', '>= 3.3.3'
# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem "sprockets-rails"
gem "rake"
# Use sqlite3 as the database for Active Record
gem "sqlite3", "~> 1.4"
gem 'jwt'

# Use the Puma web server [https://github.com/puma/puma]
gem 'puma', '~> 6.2'
gem 'pundit'
gem 'msgpack', '~> 1.2'
# Use JavaScript with ESM import maps [https://github.com/rails/importmap-rails]
gem "importmap-rails"

# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem "turbo-rails"

# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem "stimulus-rails"

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem "jbuilder"

# Use Redis adapter to run Action Cable in production
gem "redis", "~> 4.0"
gem 'devise'
# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '~> 1.15'
gem 'pg', '~> 1.4', '>= 1.4.6'
gem "aws-sdk-s3", require: false
# Use Sass to process CSS
gem "sassc-rails"
gem 'react-rails'
gem 'rack-cors'
gem 'leaflet-rails'
gem 'image_processing', '~> 1.2'
gem 'ffi', '~> 1.15', '>= 1.15.5'
# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", "~> 1.2"
gem 'webpacker', '~> 5.4.0'
gem 'turbolinks', '~> 5'
gem 'debug'
group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
end

group :development, :production do
  gem 'web-console'
end

group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem "capybara"
  gem "selenium-webdriver"
  gem "webdrivers"
end
