Rails.application.routes.draw do
  scope :api do
    resources :cats
    resources :personality_traits
  end 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
