class PersonalityTraitsController < ApplicationController
    def index
        @traits = PersonalityTrait.all
        render json: @traits
    end 

    def show
        render json:
    end  
end
