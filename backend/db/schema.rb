# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_01_221426) do

  create_table "cat_personality_traits", force: :cascade do |t|
    t.integer "cat_id", null: false
    t.integer "personality_trait_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cat_id"], name: "index_cat_personality_traits_on_cat_id"
    t.index ["personality_trait_id"], name: "index_cat_personality_traits_on_personality_trait_id"
  end

  create_table "cats", force: :cascade do |t|
    t.string "name"
    t.string "gender"
    t.string "age"
    t.string "description"
    t.string "status"
    t.string "picture"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "personality_traits", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "cat_personality_traits", "cats"
  add_foreign_key "cat_personality_traits", "personality_traits"
end
