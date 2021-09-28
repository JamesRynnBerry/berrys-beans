# This file is used by Rack-based servers to start the application.

require_relative "config/environment"

run Rails.application
Rails.application.load_server


use Rack::Cors do
    allow do
    # (if you deploy your application, change this to
    # ONLY allow requests from YOUR frontend origin, like:
    # origins 'my-react-app.netlify.app')
    # origins '*'
    origins 'http://localhost:4000'
    resource '*', headers: :any, credentials: true, methods: [:get, :post, :delete, :put, :patch, :options, :head]
    end
end