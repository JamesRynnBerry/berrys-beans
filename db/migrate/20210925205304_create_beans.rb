class CreateBeans < ActiveRecord::Migration[6.1]
  def change
    create_table :beans do |t|
      t.string :name
      t.string :roast
      t.integer :price
      t.string :flavor
      t.string :origin
      t.string :process
      t.string :producer

      t.timestamps
    end
  end
end
