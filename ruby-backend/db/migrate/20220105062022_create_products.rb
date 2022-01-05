class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.string :status
      # t.string :created_at
      # t.integer :category_id
      t.string :description
      t.string :image
      t.integer :likes
    end
  end
end
