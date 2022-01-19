class Review < ApplicationRecord

    belongs_to :user
    belongs_to :bean

    validates :comment, presence: :true
end
