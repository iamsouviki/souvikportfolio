import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:souvikportfolio/Views/Home.dart';

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

  loadWidget(){
    var duration = Duration(seconds: 3);
    return Timer(duration, ()=>Navigator.pushReplacement(context, MaterialPageRoute(builder: (context)=>Home())));
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
