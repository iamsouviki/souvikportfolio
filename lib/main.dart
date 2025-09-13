import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:souvikportfolio/Views/SplashScreenScreen.dart';
import 'package:souvikportfolio/Views/Home.dart';
import 'package:souvikportfolio/Views/AboutMe.dart';
import 'package:souvikportfolio/Views/Experience.dart';
import 'package:souvikportfolio/Views/Projects.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    final GoRouter _router = GoRouter(
      initialLocation: '/splash',
      routes: [
        GoRoute(
          path: '/splash',
          builder: (context, state) => const SplashScreenScreen(),
        ),
        GoRoute(
          path: '/',
          builder: (context, state) => Home(),
        ),
        GoRoute(
          path: '/about',
          builder: (context, state) => AboutMe(),
        ),
        GoRoute(
          path: '/experience',
          builder: (context, state) => Experience(),
        ),
        GoRoute(
          path: '/projects',
          builder: (context, state) => Projects(),
        ),
      ],
      errorBuilder: (context, state) => Scaffold(
        backgroundColor: Colors.black,
        body: const Center(
          child: Text(
            '404 - Page Not Found',
            style: TextStyle(color: Colors.white, fontSize: 24),
          ),
        ),
      ),
    );

    return MaterialApp.router(
      debugShowCheckedModeBanner: false,
      title: 'Souvik Ghosh',
      theme: ThemeData(primarySwatch: Colors.blue, fontFamily: 'Ubuntu'),
      routerConfig: _router,
    );
  }
}
