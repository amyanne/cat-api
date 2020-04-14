class CatsController < ApplicationController
    before_action :set_cat

    def index
        @cats = Cat.all
        render json: @cats
    end 

    def show
        render json: @cat
    end 

    def create
        @cat = Cat.new(cat_params)
        
        if @cat.save 
           render json: @cat
           puts "i am getting hit"
        else 
           render json: {message: "Cat profile could not be added"}, status: 400
        end
     end

     private 

     def set_cat
        cat = Cat.find_by_id(params[:id])
    end 

     def cat_params
        params.require(:cat).permit(:name, :age, :description, :status, :picture)
    end 
end
