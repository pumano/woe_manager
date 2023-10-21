import 'package:woe_manager/screens/players/player.dart';

class Team {
  final String teamName;
  final String raid;
  final List<Player> players;

  const Team({
    required this.teamName,
    required this.raid,
    required this.players,
  });

  static Team fromJson(Map<String, dynamic> json) => Team(
        teamName: json['teamName'],
        raid: json['raid'],
        players: (json['players'] as List)
            .map((player) => Player.fromJson(player))
            .toList(),
      );
}
