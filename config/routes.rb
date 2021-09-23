Rails.application.routes.draw do
  
  resources :user_beans
  resources :stores
  resources :beans
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  post 'import_beans', to: 'beans#import_beans', as: 'import_beans'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
