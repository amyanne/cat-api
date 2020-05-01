class RemoveCatFromPersonalityTraits < ActiveRecord::Migration[6.0]
  def change
    remove_reference :personality_traits, :cat, null: false, foreign_key: true
  end
end
