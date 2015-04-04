class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :slug, :blurb, :created_at, :content, :category, :image
end
