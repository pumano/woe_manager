import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:woe_manager/screens/players/team-list.dart';
import 'package:woe_manager/screens/players/team.dart';

class PlayersScreen extends StatefulWidget {
  const PlayersScreen({Key? key}) : super(key: key);

  @override
  _PlayersScreenState createState() => _PlayersScreenState();
}

class _PlayersScreenState extends State<PlayersScreen> {
  late Future<List<Team>> teams;

  Future<List<Team>> getTeams() async {
    final dynamic data =
        await rootBundle.loadString('assets/players/default.json');
    return (json.decode(data) as List)
        .map((team) => Team.fromJson(team))
        .toList();
  }

  @override
  void initState() {
    super.initState();
    teams = getTeams();
  }

  @override
  Widget build(BuildContext context) {
    return SelectionArea(
        child: Scaffold(
            appBar: AppBar(title: const Text("Players")),
            body: FutureBuilder<List<Team>>(
                future: teams,
                builder:
                    (BuildContext context, AsyncSnapshot<List<Team>> snapshot) {
                  if (snapshot.hasData) {
                    return Column(
                      children: [
                        Text("Players"),
                        Padding(
                            padding: EdgeInsets.all(10.0),
                            child: Row(children: [
                              Expanded(
                                flex: 1,
                                // Text('Raid 1'),
                                child: ListView.builder(
                                    // Says to the `ListView` that it must wrap its
                                    // height (if it's vertical) and width (if it's horizontal).
                                    shrinkWrap: true,
                                    // Let the ListView know how many items it needs to build.
                                    itemCount: snapshot.data!.length,
                                    itemBuilder: (itemBuilder, teamsIndex) =>
                                        TeamList(
                                            team: snapshot.data![teamsIndex])),
                              )
                            ]))
                      ],
                    );
                  } else {
                    return Text("OOPS");
                  }
                })));
  }
}
