import 'package:flutter/material.dart';
import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../Variable.dart';

class IntroDuctionAnimationTextAdapter extends StatefulWidget {
  @override
  _IntroDuctionAnimationTextAdapterState createState() =>
      _IntroDuctionAnimationTextAdapterState();
}

class _IntroDuctionAnimationTextAdapterState
    extends State<IntroDuctionAnimationTextAdapter> {
  Future count(int n) async {
    return Future.delayed(Duration(seconds: n));
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.fromLTRB(15, 15, 20, 20),
      child: Column(
        children: [
          Container(
            padding: EdgeInsets.all(15),
            child: AnimatedTextKit(
              isRepeatingAnimation: false,
              animatedTexts: [
                TypewriterAnimatedText(
                  '</ Hello />',
                  speed: Duration(milliseconds: 50),
                  textStyle: TextStyle(
                    color: Colors.teal,
                    fontSize: 24,
                    fontWeight: FontWeight.w700,
                    letterSpacing: 1.4,
                  ),
                  textAlign: TextAlign.start,
                ),
              ],
            ),
          ),
          Container(
            child: FutureBuilder(
              future: count(1),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.done) {
                  return Container(
                    padding: EdgeInsets.all(15),
                    child: AnimatedTextKit(
                      isRepeatingAnimation: false,
                      animatedTexts: [
                        TypewriterAnimatedText("I'm " + NAME,
                            speed: Duration(milliseconds: 55),
                            textStyle: TextStyle(
                              color: Colors.blueGrey[900],
                              fontSize: 30,
                              fontWeight: FontWeight.w700,
                            ),
                            textAlign: TextAlign.start),
                      ],
                    ),
                  );
                }
                return Container();
              },
            ),
          ),
          Container(
            child: FutureBuilder(
              future: count(2),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.done) {
                  return Container(
                    padding: EdgeInsets.all(10),
                    child: AnimatedTextKit(
                      isRepeatingAnimation: false,
                      animatedTexts: [
                        TypewriterAnimatedText(
                          PROFESSION_DETAILS,
                          textStyle: TextStyle(
                            color: Colors.blueGrey[900],
                            fontSize: 20,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ],
                    ),
                  );
                }
                return Container();
              },
            ),
          ),
          Container(
            child: FutureBuilder(
              future: count(5),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.done) {
                  return Container(
                    padding: EdgeInsets.all(10),
                    child: AnimatedTextKit(
                      isRepeatingAnimation: false,
                      animatedTexts: [
                        TypewriterAnimatedText(
                          MORE_DETAILS_INTRODUCTION,
                          speed: Duration(milliseconds: 10),
                          textStyle: TextStyle(
                            color: Colors.grey,
                            fontSize: 16,
                            letterSpacing: 1.2,
                            height: 1.3,
                          ),
                        ),
                      ],
                    ),
                  );
                }
                return Container();
              },
            ),
          ),
          Container(
            padding: EdgeInsets.only(bottom: 20),
            child: FutureBuilder(
              future: count(8),
              builder: (context,snapshot){
                if(snapshot.connectionState == ConnectionState.done){
                  return Container(
                    margin: EdgeInsets.only(top: 15),
                    decoration: BoxDecoration(borderRadius: BorderRadius.circular(30.0),color: Colors.white38,),
                    child: TextButton(
                      child: Text(
                        "    Resume    ",
                        style: TextStyle(color: Colors.black, fontSize: 15),
                      ),
                      onPressed: (){
                        launch("https://drive.google.com/file/d/1VoUkdWeccwntgGrs-tFTj8VNGqpQmYPl/view?usp=sharing");
                      },
                    ),
                  );
                }
                return Container();
              },
            ),
          ),
          Container(
            child: FutureBuilder(
              future: count(9),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.done) {
                  return Container(
                    padding: EdgeInsets.fromLTRB(0, 40, 10, 20),
                    child: AnimatedTextKit(
                      isRepeatingAnimation: false,
                      animatedTexts: [
                        TypewriterAnimatedText(
                          "Design & Build by Souvik with ❤ Flutter",
                          textStyle: TextStyle(
                            color: Colors.grey,
                            fontSize: 10,
                            letterSpacing: 1.2,
                            height: 1.3,
                          ),
                        ),
                      ],
                    ),
                  );
                }
                return Container();
              },
            ),
          ),
        ],
      ),
    );
  }
}
