class BeanSerializer < ActiveModel::Serializer
  attributes :id, :name, :roast, :price, :flavor, :origin, :process, :producer
end
