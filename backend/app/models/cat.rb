class Cat < ApplicationRecord
    has_many :personality_traits, through: :cat_personality_traits
end
