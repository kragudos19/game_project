# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

player_1 = Player.create(name: "Jim")
player_2 = Player.create(name: "Dwight")
player_3 = Player.create(name: "Sam")

first_game = Game.create(winner_id: 2)
second_game = Game.create(winner_id: 2)
third_game = Game.create(winner_id: 1)
fourth_game = Game.create(winner_id: 1)
fifth_game = Game.create(winner_id: 2)

Race.create(player_id: player_1.id, game_id: first_game.id) # 1
Race.create(player_id: player_2.id, game_id: first_game.id) # 2

Race.create(player_id: player_2.id, game_id: second_game.id) #3
Race.create(player_id: player_3.id, game_id: second_game.id) #4

Race.create(player_id: player_2.id, game_id: third_game.id) #5
Race.create(player_id: player_1.id, game_id: third_game.id) #6

Race.create(player_id: player_1.id, game_id: fourth_game.id) #7
Race.create(player_id: player_3.id, game_id: fourth_game.id) #8

Race.create(player_id: player_2.id, game_id: fifth_game.id) #9
Race.create(player_id: player_1.id, game_id: fifth_game.id) #10


