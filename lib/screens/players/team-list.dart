import 'package:flutter/material.dart';
import 'package:woe_manager/screens/players/team.dart';

class TeamList extends StatefulWidget {
  const TeamList({Key? key, required this.team}) : super(key: key);

  final Team team;

  @override
  _TeamListState createState() => _TeamListState();
}

class _TeamListState extends State<TeamList> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Card(
          child: Padding(
        padding: EdgeInsets.all(8.0),
        child: Column(children: [
          Text(widget.team.teamName),
          SizedBox(height: 10),
          ListView.builder(
            // Says to the `ListView` that it must wrap its
            // height (if it's vertical) and width (if it's horizontal).
            shrinkWrap: true,
            // Let the ListView know how many items it needs to build.
            itemCount: widget.team.players.length,

            itemBuilder: (itemBuilder, index) => Container(
              width: 200,
              child: Row(
                children: [
                  Image.asset(
                    'assets/jobs/${widget.team.players[index].job}.png',
                    width: 32,
                    height: 32,
                  ),
                  Text(widget.team.players[index].nickname,
                      style: const TextStyle(fontWeight: FontWeight.bold))
                ],
              ),
            ),
          ),
        ]),
      )),
    );
  }
}
