class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :bean_id
end
