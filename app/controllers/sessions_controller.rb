class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    # def index 
    #     cookes[:cookies_hi] ||='rose'
    #     cookes[:cookies_hi] ||='world'
    #     render json: {cookies:cookies.to_hash, session:session}
    # end

    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            puts(user)
            render json: user, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end    
    # def create
    #     user = User.find_by(email: params["user"]["email"])
    #     .try(:authenticate), params["user"]["password"]

    #     if user 
    #         session[:user_id] = user.id
    #         render json: {
    #             status: :created, 
    #             logged_in: true, 
    #             user: user
    #         }
    #     else 
    #         render json: { status: 401 }
    #     end
    # end

    def destroy
        session.delete :user_id
        head :no_content
    end
end