class BeanSerializer < ActiveModel::Serializer
  attributes :id, :store_id, :user_id, :name, :type, :price, :altitude, :flavor, :origin, :process, :producer, :store_name
end
