class BeansController < ApplicationController
    # before_action :authorize, only: [:index, :show]

    def index 
        beans = Bean.all
        render json: beans
    end

    def show 
        bean = Bean.find_by(id: params[:id])
        if bean 
            render json: bean
        else 
            render json: {error: "Not Found"}, status: :not_found
        end
    end


    #is user_id the right validator?
    def create 
        bean = Bean.create(beans_params)
        if bean.valid?
            session[:user_id] = bean.id
            render json: bean, status: :created
        else 
            render json: { error: bean.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        bean = Bean.find_by(id:params[:id])
        if bean
            bean.destroy
        else 
            render json: {error: "Not Found"}, status: :not_found
        end
    end

    def update 
        bean = Bean.find_by(id: params[:id])
        if bean 
            bean.update(beans_params)
            render json: product, status: :accepted
        else 
            render json: {error: "Error Not Found" }, status: :not_found
        end
    end


    private 

    def beans_params
        params.permit(:name, :roast, :price, :flavor, :origin, :process, :producer)
    end
end
