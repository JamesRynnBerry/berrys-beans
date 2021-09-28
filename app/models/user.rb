class User < ApplicationRecord
    has_secure_password

    has_many :user_beans
    has_many :beans, through: :user_beans
    has_many :reviews
    
    validates :email, presence: true
    validates :email, uniqueness: true
end
