Rails.application.routes.draw do
  resources :cat_personality_traits
    resources :cats
    resources :personality_traits
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
