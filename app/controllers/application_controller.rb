class ApplicationController < ActionController::API
  include ActionController::Cookies

  def currentUser
      User.find_by(id: sessions[:user_id])
  end

  before_action :authorize

  private 

  def authorize
    render json: { errors: ["Not authorized"] }, status: 
    :unauthorized unless session.include? :user_id
  end

end
