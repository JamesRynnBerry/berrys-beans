class CreateBeans < ActiveRecord::Migration[6.1]
  def change
    create_table :beans do |t|
      t.integer :store_id
      t.integer :user_id
      t.string :name
      t.string :type
      t.integer :price
      t.string :altitude
      t.string :flavor
      t.string :origin
      t.string :process
      t.string :producer
      t.string :store_name

      t.timestamps
    end
  end
end
