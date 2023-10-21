class Player {
  final String nickname;
  final String job;
  final num order;

  const Player({
    required this.nickname,
    required this.job,
    required this.order,
  });

  static Player fromJson(Map<String, dynamic> json) => Player(
        nickname: json['nickname'],
        job: json['job'],
        order: json['order'],
      );
}
