class CreateUserBeans < ActiveRecord::Migration[6.1]
  def change
    create_table :user_beans do |t|
      t.integer :bean_id
      t.integer :user_id

      t.timestamps
    end
  end
end
