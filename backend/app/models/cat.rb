class Cat < ApplicationRecord
    has_many :cat_personality_traits
    has_many :personality_traits, through: :cat_personality_traits

    accepts_nested_attributes_for :cat_personality_traits
end
