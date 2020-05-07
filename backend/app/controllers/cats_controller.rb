class CatsController < ApplicationController
    before_action :set_cat


    def index
        @cats = Cat.all
        render json: @cats, include: [:personality_traits]
    end 

    def show
        render json: @cat
    end 

    def create
        @cat = Cat.new(cat_params)
        @cat.cat_personality_traits.each do |cpt|
            cpt.cat_id = @cat.id
            cpt.save
        end

        if @cat.save 
           render json: @cat, include: [:personality_traits]
        else 
           render json: {message: "Cat profile could not be added"}, status: 400
        end
        
        puts "!!!!@@@@@ #{@cat.cat_personality_traits.inspect}"
     end

     private 

     def set_cat
        cat = Cat.find_by_id(params[:id])
    end 

     def cat_params
        params.require(:cat).permit(:name, :age, :gender, :description, :status, :picture, cat_personality_traits_attributes: [:name_of_trait_from_frontend])
    end 
end
