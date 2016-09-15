Rails.application.routes.draw do
  root 'home#index'
  
  get 'home/index'

  resources :races
  resources :games
  resources :players
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
