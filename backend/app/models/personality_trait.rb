class PersonalityTrait < ApplicationRecord
  has_many :cats, through: :cat_personality_traits
end
