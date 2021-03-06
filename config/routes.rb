Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'

  as :user do
    get '/apply' => 'devise/registrations#new'
  end
end
