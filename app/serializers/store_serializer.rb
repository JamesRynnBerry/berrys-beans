class StoreSerializer < ActiveModel::Serializer
  attributes :id, :store_name, :location, :bean_id
end