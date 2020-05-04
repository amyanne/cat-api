class Cat < ApplicationRecord
    has_many :cat_personality_traits
    has_many :personality_traits, through: :cat_personality_traits

    #accepts_nested_attributes_for :cat_personality_traits

    def cat_personality_traits_attributes=(attributes)
        # pt = PersonalityTrait.find_by(name: "Social").id
        # puts "got here #{pt}"
        for i in attributes do 
            cpt = CatPersonalityTrait.create(personality_trait_id: PersonalityTrait.find_by(name: i[:name_of_trait_from_frontend]).id)
            self.cat_personality_traits << cpt
        end
        puts "!@#!@#!@#!@ #{self.cat_personality_traits.inspect}" 
    end 
end
