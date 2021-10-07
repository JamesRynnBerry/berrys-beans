class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: {error:["Not authorized"]}, status: :unauthorized unless @current_user
  end 


end



# class ApplicationController < ActionController::API
#   include ActionController::Cookies

#   def currentUser
#       User.find_by(id: sessions[:user_id])
#   end

#   before_action :authorize

#   private 

#   def authorize
#     render json: { errors: ["Not authorized"] }, status: 
#     :unauthorized unless session.include? :user_id
#   end

# end
