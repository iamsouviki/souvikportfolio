import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';

import '../../Variable.dart';

class Education extends StatefulWidget {
  @override
  _EducationState createState() => _EducationState();
}

class _EducationState extends State<Education> {
  Future count(int n) async {
    return Future.delayed(Duration(seconds: n));
  }

  late double hight, width;
  @override
  Widget build(BuildContext context) {
    hight = MediaQuery.of(context).size.height > 600
        ? MediaQuery.of(context).size.height
        : 600;
    width = MediaQuery.of(context).size.width > 300
        ? MediaQuery.of(context).size.width
        : 300;
    var borderColor = Colors.white;
    var backgroundColor = Colors.transparent;
    return Container(
      child: Column(
        children: [
          Container(
            padding: EdgeInsets.all(15),
            child: AnimatedTextKit(
              isRepeatingAnimation: false,
              animatedTexts: [
                TypewriterAnimatedText(
                  'Education',
                  speed: Duration(milliseconds: 55),
                  textStyle: TextStyle(
                    color: Colors.white,
                    fontSize: 25,
                    fontWeight: FontWeight.w700,
                    letterSpacing: 1.4,
                  ),
                  textAlign: TextAlign.start,
                ),
              ],
            ),
          ),
          width>610 ?
          Row(
            children: [
              Flexible(
                flex: 1,
                child: Container(
                  color: Colors.white,
                  child: Transform.rotate(
                    angle: 0,
                    child: FittedBox(
                      child: Container(
                        width: 100,
                        height: 100,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: backgroundColor,
                          border: Border.all(color: borderColor, width: 2),
                          image: DecorationImage(
                            image: AssetImage(
                                'assets/images/education.png'),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              Flexible(
                flex: 2,
                child: Container(
                    padding: EdgeInsets.all(10),
                    child: Center(
                      child: Column(
                        children: [
                          FutureBuilder(
                            future: count(1),
                            builder: (context, snapshot) {
                              if (snapshot.connectionState == ConnectionState.done) {
                                return Container(
                                  padding: EdgeInsets.fromLTRB(15,15,15,10),
                                  child: AnimatedTextKit(
                                    isRepeatingAnimation: false,
                                    animatedTexts: [
                                      TypewriterAnimatedText(DEGREE,
                                          speed: Duration(milliseconds: 10),
                                          textStyle: TextStyle(
                                            color: Colors.blueGrey[900],
                                            fontSize: 17,
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
                          FutureBuilder(
                            future: count(1),
                            builder: (context, snapshot) {
                              if (snapshot.connectionState == ConnectionState.done) {
                                return Container(
                                  padding: EdgeInsets.fromLTRB(15,0,15,10),
                                  child: AnimatedTextKit(
                                    isRepeatingAnimation: false,
                                    animatedTexts: [
                                      TypewriterAnimatedText(COLLEGE_NAME,
                                          speed: Duration(milliseconds: 10),
                                          textStyle: TextStyle(
                                            color: Colors.blueGrey[900],
                                            fontSize: 12,
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
                          FutureBuilder(
                            future: count(1),
                            builder: (context, snapshot) {
                              if (snapshot.connectionState == ConnectionState.done) {
                                return Container(
                                  padding: EdgeInsets.fromLTRB(15,0,15,15),
                                  child: AnimatedTextKit(
                                    isRepeatingAnimation: false,
                                    animatedTexts: [
                                      TypewriterAnimatedText(CGPA,
                                          speed: Duration(milliseconds: 10),
                                          textStyle: TextStyle(
                                            color: Colors.blueGrey[900],
                                            fontSize: 11,
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
                          FutureBuilder(
                            future: count(1),
                            builder: (context, snapshot) {
                              if (snapshot.connectionState == ConnectionState.done) {
                                return Container(
                                  padding: EdgeInsets.fromLTRB(15,15,15,10),
                                  child: AnimatedTextKit(
                                    isRepeatingAnimation: false,
                                    animatedTexts: [
                                      TypewriterAnimatedText("10+2 ( 2017 )",
                                          speed: Duration(milliseconds: 10),
                                          textStyle: TextStyle(
                                            color: Colors.blueGrey[900],
                                            fontSize: 17,
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
                          FutureBuilder(
                            future: count(1),
                            builder: (context, snapshot) {
                              if (snapshot.connectionState == ConnectionState.done) {
                                return Container(
                                  padding: EdgeInsets.fromLTRB(15,0,15,10),
                                  child: AnimatedTextKit(
                                    isRepeatingAnimation: false,
                                    animatedTexts: [
                                      TypewriterAnimatedText(TWELVETH_SCHOOL,
                                          speed: Duration(milliseconds: 10),
                                          textStyle: TextStyle(
                                            color: Colors.blueGrey[900],
                                            fontSize: 12,
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
                          FutureBuilder(
                            future: count(1),
                            builder: (context, snapshot) {
                              if (snapshot.connectionState == ConnectionState.done) {
                                return Container(
                                  padding: EdgeInsets.fromLTRB(15,0,15,15),
                                  child: AnimatedTextKit(
                                    isRepeatingAnimation: false,
                                    animatedTexts: [
                                      TypewriterAnimatedText(TWELVETH_PERCENTAGE,
                                          speed: Duration(milliseconds: 10),
                                          textStyle: TextStyle(
                                            color: Colors.blueGrey[900],
                                            fontSize: 11,
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
                          FutureBuilder(
                            future: count(1),
                            builder: (context, snapshot) {
                              if (snapshot.connectionState == ConnectionState.done) {
                                return Container(
                                  padding: EdgeInsets.fromLTRB(15,15,15,10),
                                  child: AnimatedTextKit(
                                    isRepeatingAnimation: false,
                                    animatedTexts: [
                                      TypewriterAnimatedText("10 ( 2015 )",
                                          speed: Duration(milliseconds: 10),
                                          textStyle: TextStyle(
                                            color: Colors.blueGrey[900],
                                            fontSize: 17,
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
                          FutureBuilder(
                            future: count(1),
                            builder: (context, snapshot) {
                              if (snapshot.connectionState == ConnectionState.done) {
                                return Container(
                                  padding: EdgeInsets.fromLTRB(15,0,15,10),
                                  child: AnimatedTextKit(
                                    isRepeatingAnimation: false,
                                    animatedTexts: [
                                      TypewriterAnimatedText(TENTH_SCHOOL,
                                          speed: Duration(milliseconds: 10),
                                          textStyle: TextStyle(
                                            color: Colors.blueGrey[900],
                                            fontSize: 12,
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
                          FutureBuilder(
                            future: count(1),
                            builder: (context, snapshot) {
                              if (snapshot.connectionState == ConnectionState.done) {
                                return Container(
                                  padding: EdgeInsets.fromLTRB(15,0,15,15),
                                  child: AnimatedTextKit(
                                    isRepeatingAnimation: false,
                                    animatedTexts: [
                                      TypewriterAnimatedText(TENTH_PERCENTAGE,
                                          speed: Duration(milliseconds: 10),
                                          textStyle: TextStyle(
                                            color: Colors.blueGrey[900],
                                            fontSize: 11,
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
                        ],
                      ),
                    )
                ),
              )
            ],
          ) :
          Column(
            children: [
              Container(
                color: Colors.white,
                child: Transform.rotate(
                  angle: 0,
                  child: FittedBox(
                    child: Container(
                      width: 30,
                      height: 30,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: backgroundColor,
                        border: Border.all(color: borderColor, width: 2),
                        image: DecorationImage(
                          image: AssetImage(
                              'assets/images/education.png'),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              Container(
                  padding: EdgeInsets.all(10),
                  child: Center(
                    child: Column(
                      children: [
                        FutureBuilder(
                          future: count(1),
                          builder: (context, snapshot) {
                            if (snapshot.connectionState == ConnectionState.done) {
                              return Container(
                                padding: EdgeInsets.fromLTRB(15,15,15,10),
                                child: AnimatedTextKit(
                                  isRepeatingAnimation: false,
                                  animatedTexts: [
                                    TypewriterAnimatedText(DEGREE,
                                        speed: Duration(milliseconds: 10),
                                        textStyle: TextStyle(
                                          color: Colors.blueGrey[900],
                                          fontSize: 17,
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
                        FutureBuilder(
                          future: count(1),
                          builder: (context, snapshot) {
                            if (snapshot.connectionState == ConnectionState.done) {
                              return Container(
                                padding: EdgeInsets.fromLTRB(15,0,15,10),
                                child: AnimatedTextKit(
                                  isRepeatingAnimation: false,
                                  animatedTexts: [
                                    TypewriterAnimatedText(COLLEGE_NAME,
                                        speed: Duration(milliseconds: 10),
                                        textStyle: TextStyle(
                                          color: Colors.blueGrey[900],
                                          fontSize: 12,
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
                        FutureBuilder(
                          future: count(1),
                          builder: (context, snapshot) {
                            if (snapshot.connectionState == ConnectionState.done) {
                              return Container(
                                padding: EdgeInsets.fromLTRB(15,0,15,15),
                                child: AnimatedTextKit(
                                  isRepeatingAnimation: false,
                                  animatedTexts: [
                                    TypewriterAnimatedText(CGPA,
                                        speed: Duration(milliseconds: 10),
                                        textStyle: TextStyle(
                                          color: Colors.blueGrey[900],
                                          fontSize: 11,
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
                        FutureBuilder(
                          future: count(1),
                          builder: (context, snapshot) {
                            if (snapshot.connectionState == ConnectionState.done) {
                              return Container(
                                padding: EdgeInsets.fromLTRB(15,15,15,10),
                                child: AnimatedTextKit(
                                  isRepeatingAnimation: false,
                                  animatedTexts: [
                                    TypewriterAnimatedText("10+2 ( 2017 )",
                                        speed: Duration(milliseconds: 10),
                                        textStyle: TextStyle(
                                          color: Colors.blueGrey[900],
                                          fontSize: 17,
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
                        FutureBuilder(
                          future: count(1),
                          builder: (context, snapshot) {
                            if (snapshot.connectionState == ConnectionState.done) {
                              return Container(
                                padding: EdgeInsets.fromLTRB(15,0,15,10),
                                child: AnimatedTextKit(
                                  isRepeatingAnimation: false,
                                  animatedTexts: [
                                    TypewriterAnimatedText(TWELVETH_SCHOOL,
                                        speed: Duration(milliseconds: 10),
                                        textStyle: TextStyle(
                                          color: Colors.blueGrey[900],
                                          fontSize: 12,
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
                        FutureBuilder(
                          future: count(1),
                          builder: (context, snapshot) {
                            if (snapshot.connectionState == ConnectionState.done) {
                              return Container(
                                padding: EdgeInsets.fromLTRB(15,0,15,15),
                                child: AnimatedTextKit(
                                  isRepeatingAnimation: false,
                                  animatedTexts: [
                                    TypewriterAnimatedText(TWELVETH_PERCENTAGE,
                                        speed: Duration(milliseconds: 10),
                                        textStyle: TextStyle(
                                          color: Colors.blueGrey[900],
                                          fontSize: 11,
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
                        FutureBuilder(
                          future: count(1),
                          builder: (context, snapshot) {
                            if (snapshot.connectionState == ConnectionState.done) {
                              return Container(
                                padding: EdgeInsets.fromLTRB(15,15,15,10),
                                child: AnimatedTextKit(
                                  isRepeatingAnimation: false,
                                  animatedTexts: [
                                    TypewriterAnimatedText("10 ( 2015 )",
                                        speed: Duration(milliseconds: 10),
                                        textStyle: TextStyle(
                                          color: Colors.blueGrey[900],
                                          fontSize: 17,
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
                        FutureBuilder(
                          future: count(1),
                          builder: (context, snapshot) {
                            if (snapshot.connectionState == ConnectionState.done) {
                              return Container(
                                padding: EdgeInsets.fromLTRB(15,0,15,10),
                                child: AnimatedTextKit(
                                  isRepeatingAnimation: false,
                                  animatedTexts: [
                                    TypewriterAnimatedText(TENTH_SCHOOL,
                                        speed: Duration(milliseconds: 10),
                                        textStyle: TextStyle(
                                          color: Colors.blueGrey[900],
                                          fontSize: 12,
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
                        FutureBuilder(
                          future: count(1),
                          builder: (context, snapshot) {
                            if (snapshot.connectionState == ConnectionState.done) {
                              return Container(
                                padding: EdgeInsets.fromLTRB(15,0,15,15),
                                child: AnimatedTextKit(
                                  isRepeatingAnimation: false,
                                  animatedTexts: [
                                    TypewriterAnimatedText(TENTH_PERCENTAGE,
                                        speed: Duration(milliseconds: 10),
                                        textStyle: TextStyle(
                                          color: Colors.blueGrey[900],
                                          fontSize: 11,
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
                      ],
                    ),
                  )
              )
            ],
          ),
        ],
      )
    );
  }
}
