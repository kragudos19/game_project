Rails.application.routes.draw do

  root to: 'home#index'



  get 'sessions/new', to: 'sessions#new'

  resources :sessions, path_names: { new: 'login' }
  resources :races
  resources :games
  resources :players
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
