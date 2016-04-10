class AddRegistrationFieldsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :last_completed_grade, :integer
    add_column :users, :allergies, :string
    add_column :users, :food_preferences, :string
  end
end
