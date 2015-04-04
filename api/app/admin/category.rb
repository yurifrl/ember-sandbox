ActiveAdmin.register Category do

  permit_params :id, :title, :slug, :description
end