class CategorySerializer < ActiveModel::Serializer
  attributes :id, :title, :slug, :description
end
