class Bean < ApplicationRecord
    has_many :reviews
    has_many :user_beans
    has_many :users, through: :user_beans
   
   
    validates :name, presence: true
end
