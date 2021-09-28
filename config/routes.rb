Rails.application.routes.draw do
  
  resources :beans, only: [:index]
  resources :store_beans
  resources :user_beans
  resources :beans
  resources :stores
  resources :reviews
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/login', to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post '/signup', to: 'users#create'

  post '/beans', to: 'beans#create'

  delete '/users/:id', to: 'users#destroy'

  get '/me', to: 'users#show'
  get '/test', to: 'users#testing'
  
end
