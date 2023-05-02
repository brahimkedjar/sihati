# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Doctor.create!(
  email: "test@gmail.com",
  encrypted_password: "$2a$12$9TktWhzpypAy6kP4wQpWUu9gj3wIS6rpPra1dr3LAuxB6LQIcasSe",
  name: "Test",
  phone_number: "0552356985",
  address: "W117, Sétif",
  specialite: "Cardiologue",
  selected_wilaya: ["Aïn Abessa", "Aïn Arnat"],
  confirmation_token: "7bcwQrJV-yNjtWJaPmks",
  confirmed_at: DateTime.now,
  confirmation_sent_at: DateTime.now,
  sign_in_count: 0,
  created_at: DateTime.now,
  updated_at: DateTime.now
)

Doctor.create!(
  email: "hichamyahiaoui@gmail.com",
  encrypted_password: "$2a$12$EgR/LaNfB9qV1FRLAiVcHefwL/PZ8WaLaAIlV.Mg/AmOnuri/Uup.",
  name: "Hicham Yahiaoui",
  phone_number: "0559261345",
  address: "Boulevard Chouaba Brahim, Sétif",
  specialite: "Cardiologue",
  selected_wilaya: ["Aïn Abessa"],
  confirmation_token: "bGTTwicSLvMcNYaXhy8r",
  confirmed_at: DateTime.now,
  confirmation_sent_at: DateTime.now,
  sign_in_count: 0,
  created_at: DateTime.now,
  updated_at: DateTime.now
)
