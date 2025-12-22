import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:go_router/go_router.dart';

class SplashScreenScreen extends StatefulWidget {
  const SplashScreenScreen({Key? key}) : super(key: key);

  @override
  _SplashScreenScreenState createState() => _SplashScreenScreenState();
}

class _SplashScreenScreenState extends State<SplashScreenScreen> {
  @override
  void initState() {
    super.initState();
    loadWidget();
  }

  loadWidget() {
    var duration = const Duration(seconds: 1);
    return Timer(duration, () => context.go('/'));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Column(
            children: [
              SpinKitThreeBounce(
                color: Colors.yellowAccent,
                size: 30,
              ),
              Text(
                "Stealing Your Data  😉",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 17,
                  letterSpacing: 2,
                ),
              )
            ],
          )
        ],
      ),
    );
  }
}
