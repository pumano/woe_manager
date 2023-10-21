import 'package:flutter/material.dart';
import 'package:woe_manager/screens/players/players.screen.dart';
import 'package:woe_manager/screens/splash/splash.screen.dart';

var routes = <String, WidgetBuilder>{
  //'/': (BuildContext context) => const MainScreen(),
  '/players': (BuildContext context) => const PlayersScreen(),
  '/splash': (BuildContext context) => const SplashScreen(),
  // '/videos': (BuildContext context) => const VideoScreen(),
  // '/login': (BuildContext context) => const LoginScreen(),
  // '/signup': (BuildContext context) => const SignupScreen(),
};
