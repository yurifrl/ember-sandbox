class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :slug
      t.string :blurb
      t.text :content
      t.integer :category_id
      t.text :image

      t.timestamps null: false
    end
  end
end
