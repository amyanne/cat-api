class CatsController < ApplicationController
    #before_action :set_cat


    def index
        @cats = Cat.all
        render json: @cats
    end 

    def show
        render json: @cat
    end 

    def create
        @cat = Cat.new(cat_params)
        @cat.save
        traits = cat_params[:cat_traits]
        @cat_traits = []
        for i in traits do 
            i[:cat_id] = @cat.id
            i[:personality_trait] = PersonalityTrait.find_by(personality_trait: i[:name_of_trait_from_frontend]).id
            i.save
            if i.save
                @cat_traits << CatPersonalityTrait.create(i)
            else
                render json: {message: "Cat trait could not be added"}, status: 400
                
            end
         end 
        @cat_traits = CatPersonalityTraits.create(cat_params[:cat_traits])
        
        if @cat.save 
           render json: @cat
        else 
           render json: {message: "Cat profile could not be added"}, status: 400
        end
     end

     private 

     def set_cat
        cat = Cat.find_by_id(params[:id])
    end 

     def cat_params
        params.require(:cat).permit(:name, :age, :gender, :description, :status, :picture, cat_traits: [:name_of_trait_from_frontend])
    end 
end
