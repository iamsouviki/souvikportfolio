import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';

import '../../Variable.dart';

class Education extends StatefulWidget {
  final VoidCallback? onComplete;
  final bool showAnimations;

  const Education({Key? key, this.onComplete, this.showAnimations = true})
      : super(key: key);

  @override
  _EducationState createState() => _EducationState();
}

class _EducationState extends State<Education> with TickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: Duration(seconds: 1),
      vsync: this,
    );
    _animation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(parent: _controller, curve: Curves.easeInOut),
    );
    _controller.forward();

    // Call onComplete after animations finish (title ~0.5s + staggered texts ~5.5s)
    Future.delayed(const Duration(seconds: 6), () {
      if (mounted) {
        widget.onComplete?.call();
      }
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  Future count(int n) async {
    return Future.delayed(Duration(seconds: n));
  }

  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    height = height > 600 ? height : 600;
    width = width > 300 ? width : 300;

    return Card(
      color: Colors.transparent,
      elevation: 8,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
      ),
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(16),
          color: Colors.white.withOpacity(0.1),
        ),
        child: Container(
          padding: EdgeInsets.all(16),
          child: FadeTransition(
            opacity: _animation,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                // Title
                Container(
                  padding: EdgeInsets.symmetric(vertical: 8, horizontal: 4),
                  child: widget.showAnimations
                      ? AnimatedTextKit(
                          isRepeatingAnimation: false,
                          animatedTexts: [
                            TypewriterAnimatedText(
                              'Education',
                              speed: Duration(milliseconds: 50),
                              textStyle: TextStyle(
                                color: Colors.white,
                                fontSize: 28,
                                fontWeight: FontWeight.bold,
                                letterSpacing: 1.2,
                                shadows: [
                                  Shadow(
                                    color: Colors.black26,
                                    offset: Offset(1, 1),
                                    blurRadius: 2,
                                  ),
                                ],
                              ),
                              textAlign: TextAlign.center,
                            ),
                          ],
                        )
                      : Text(
                          'Education',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 28,
                            fontWeight: FontWeight.bold,
                            letterSpacing: 1.2,
                            shadows: [
                              Shadow(
                                color: Colors.black26,
                                offset: Offset(1, 1),
                                blurRadius: 2,
                              ),
                            ],
                          ),
                          textAlign: TextAlign.center,
                        ),
                ),
                SizedBox(height: 20),
                // Content
                Container(
                  padding: EdgeInsets.all(20),
                  child: width > 610
                      ? Row(
                          children: [
                            // Image
                            Flexible(
                              flex: 1,
                              child: ClipOval(
                                child: Container(
                                  width: 100,
                                  height: 100,
                                  decoration: BoxDecoration(
                                    shape: BoxShape.circle,
                                    color: Colors.white,
                                    border: Border.all(
                                      color: Colors.blue.shade300,
                                      width: 3,
                                    ),
                                  ),
                                  child: Image.asset(
                                    'assets/images/education.png',
                                    fit: BoxFit.contain,
                                  ),
                                ),
                              ),
                            ),
                            SizedBox(width: 16),
                            // Texts
                            Flexible(
                              flex: 2,
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  // Degree
                                  widget.showAnimations
                                      ? FutureBuilder(
                                          future: Future.delayed(
                                              Duration(milliseconds: 1000)),
                                          builder: (context, snapshot) {
                                            if (snapshot.connectionState ==
                                                ConnectionState.done) {
                                              return Container(
                                                padding: EdgeInsets.fromLTRB(
                                                    15, 15, 15, 10),
                                                child: AnimatedTextKit(
                                                  isRepeatingAnimation: false,
                                                  animatedTexts: [
                                                    TypewriterAnimatedText(
                                                      DEGREE,
                                                      speed: Duration(
                                                          milliseconds: 20),
                                                      textStyle: TextStyle(
                                                        color: Colors.white,
                                                        fontSize: 17,
                                                        fontWeight:
                                                            FontWeight.w700,
                                                      ),
                                                      textAlign:
                                                          TextAlign.start,
                                                    ),
                                                  ],
                                                ),
                                              );
                                            }
                                            return Container();
                                          },
                                        )
                                      : Container(
                                          padding: EdgeInsets.fromLTRB(
                                              15, 15, 15, 10),
                                          child: Text(
                                            DEGREE,
                                            style: TextStyle(
                                              color: Colors.white,
                                              fontSize: 17,
                                              fontWeight: FontWeight.w700,
                                            ),
                                            textAlign: TextAlign.start,
                                          ),
                                        ),
                                  // College
                                  widget.showAnimations
                                      ? FutureBuilder(
                                          future: Future.delayed(
                                              Duration(milliseconds: 1600)),
                                          builder: (context, snapshot) {
                                            if (snapshot.connectionState ==
                                                ConnectionState.done) {
                                              return Container(
                                                padding: EdgeInsets.fromLTRB(
                                                    15, 0, 15, 10),
                                                child: AnimatedTextKit(
                                                  isRepeatingAnimation: false,
                                                  animatedTexts: [
                                                    TypewriterAnimatedText(
                                                      COLLEGE_NAME,
                                                      speed: Duration(
                                                          milliseconds: 20),
                                                      textStyle: TextStyle(
                                                        color: Colors.white,
                                                        fontSize: 12,
                                                        fontWeight:
                                                            FontWeight.w700,
                                                      ),
                                                      textAlign:
                                                          TextAlign.start,
                                                    ),
                                                  ],
                                                ),
                                              );
                                            }
                                            return Container();
                                          },
                                        )
                                      : Container(
                                          padding: EdgeInsets.fromLTRB(
                                              15, 0, 15, 10),
                                          child: Text(
                                            COLLEGE_NAME,
                                            style: TextStyle(
                                              color: Colors.white,
                                              fontSize: 12,
                                              fontWeight: FontWeight.w700,
                                            ),
                                            textAlign: TextAlign.start,
                                          ),
                                        ),
                                  // CGPA
                                  widget.showAnimations
                                      ? FutureBuilder(
                                          future: Future.delayed(
                                              Duration(milliseconds: 2200)),
                                          builder: (context, snapshot) {
                                            if (snapshot.connectionState ==
                                                ConnectionState.done) {
                                              return Container(
                                                padding: EdgeInsets.fromLTRB(
                                                    15, 0, 15, 15),
                                                child: AnimatedTextKit(
                                                  isRepeatingAnimation: false,
                                                  animatedTexts: [
                                                    TypewriterAnimatedText(
                                                      CGPA,
                                                      speed: Duration(
                                                          milliseconds: 20),
                                                      textStyle: TextStyle(
                                                        color: Colors.white,
                                                        fontSize: 11,
                                                        fontWeight:
                                                            FontWeight.w700,
                                                      ),
                                                      textAlign:
                                                          TextAlign.start,
                                                    ),
                                                  ],
                                                ),
                                              );
                                            }
                                            return Container();
                                          },
                                        )
                                      : Container(
                                          padding: EdgeInsets.fromLTRB(
                                              15, 0, 15, 15),
                                          child: Text(
                                            CGPA,
                                            style: TextStyle(
                                              color: Colors.white,
                                              fontSize: 11,
                                              fontWeight: FontWeight.w700,
                                            ),
                                            textAlign: TextAlign.start,
                                          ),
                                        ),
                                  // 10+2 Year
                                  widget.showAnimations
                                      ? FutureBuilder(
                                          future: Future.delayed(
                                              Duration(milliseconds: 2800)),
                                          builder: (context, snapshot) {
                                            if (snapshot.connectionState ==
                                                ConnectionState.done) {
                                              return Container(
                                                padding: EdgeInsets.fromLTRB(
                                                    15, 15, 15, 10),
                                                child: AnimatedTextKit(
                                                  isRepeatingAnimation: false,
                                                  animatedTexts: [
                                                    TypewriterAnimatedText(
                                                      "10+2 ( 2017 )",
                                                      speed: Duration(
                                                          milliseconds: 20),
                                                      textStyle: TextStyle(
                                                        color: Colors.white,
                                                        fontSize: 17,
                                                        fontWeight:
                                                            FontWeight.w700,
                                                      ),
                                                      textAlign:
                                                          TextAlign.start,
                                                    ),
                                                  ],
                                                ),
                                              );
                                            }
                                            return Container();
                                          },
                                        )
                                      : Container(
                                          padding: EdgeInsets.fromLTRB(
                                              15, 15, 15, 10),
                                          child: Text(
                                            "10+2 ( 2017 )",
                                            style: TextStyle(
                                              color: Colors.white,
                                              fontSize: 17,
                                              fontWeight: FontWeight.w700,
                                            ),
                                            textAlign: TextAlign.start,
                                          ),
                                        ),
                                  // 12th School
                                  widget.showAnimations
                                      ? FutureBuilder(
                                          future: Future.delayed(
                                              Duration(milliseconds: 3400)),
                                          builder: (context, snapshot) {
                                            if (snapshot.connectionState ==
                                                ConnectionState.done) {
                                              return Container(
                                                padding: EdgeInsets.fromLTRB(
                                                    15, 0, 15, 10),
                                                child: AnimatedTextKit(
                                                  isRepeatingAnimation: false,
                                                  animatedTexts: [
                                                    TypewriterAnimatedText(
                                                      TWELVETH_SCHOOL,
                                                      speed: Duration(
                                                          milliseconds: 20),
                                                      textStyle: TextStyle(
                                                        color: Colors.white,
                                                        fontSize: 12,
                                                        fontWeight:
                                                            FontWeight.w700,
                                                      ),
                                                      textAlign:
                                                          TextAlign.start,
                                                    ),
                                                  ],
                                                ),
                                              );
                                            }
                                            return Container();
                                          },
                                        )
                                      : Container(
                                          padding: EdgeInsets.fromLTRB(
                                              15, 0, 15, 10),
                                          child: Text(
                                            TWELVETH_SCHOOL,
                                            style: TextStyle(
                                              color: Colors.white,
                                              fontSize: 12,
                                              fontWeight: FontWeight.w700,
                                            ),
                                            textAlign: TextAlign.start,
                                          ),
                                        ),
                                  // 12th Percentage
                                  widget.showAnimations
                                      ? FutureBuilder(
                                          future: Future.delayed(
                                              Duration(milliseconds: 4000)),
                                          builder: (context, snapshot) {
                                            if (snapshot.connectionState ==
                                                ConnectionState.done) {
                                              return Container(
                                                padding: EdgeInsets.fromLTRB(
                                                    15, 0, 15, 15),
                                                child: AnimatedTextKit(
                                                  isRepeatingAnimation: false,
                                                  animatedTexts: [
                                                    TypewriterAnimatedText(
                                                      TWELVETH_PERCENTAGE,
                                                      speed: Duration(
                                                          milliseconds: 20),
                                                      textStyle: TextStyle(
                                                        color: Colors.white,
                                                        fontSize: 11,
                                                        fontWeight:
                                                            FontWeight.w700,
                                                      ),
                                                      textAlign:
                                                          TextAlign.start,
                                                    ),
                                                  ],
                                                ),
                                              );
                                            }
                                            return Container();
                                          },
                                        )
                                      : Container(
                                          padding: EdgeInsets.fromLTRB(
                                              15, 0, 15, 15),
                                          child: Text(
                                            TWELVETH_PERCENTAGE,
                                            style: TextStyle(
                                              color: Colors.white,
                                              fontSize: 11,
                                              fontWeight: FontWeight.w700,
                                            ),
                                            textAlign: TextAlign.start,
                                          ),
                                        ),
                                  // 10th Year
                                  widget.showAnimations
                                      ? FutureBuilder(
                                          future: Future.delayed(
                                              Duration(milliseconds: 4600)),
                                          builder: (context, snapshot) {
                                            if (snapshot.connectionState ==
                                                ConnectionState.done) {
                                              return Container(
                                                padding: EdgeInsets.fromLTRB(
                                                    15, 15, 15, 10),
                                                child: AnimatedTextKit(
                                                  isRepeatingAnimation: false,
                                                  animatedTexts: [
                                                    TypewriterAnimatedText(
                                                      "10 ( 2015 )",
                                                      speed: Duration(
                                                          milliseconds: 20),
                                                      textStyle: TextStyle(
                                                        color: Colors.white,
                                                        fontSize: 17,
                                                        fontWeight:
                                                            FontWeight.w700,
                                                      ),
                                                      textAlign:
                                                          TextAlign.start,
                                                    ),
                                                  ],
                                                ),
                                              );
                                            }
                                            return Container();
                                          },
                                        )
                                      : Container(
                                          padding: EdgeInsets.fromLTRB(
                                              15, 15, 15, 10),
                                          child: Text(
                                            "10 ( 2015 )",
                                            style: TextStyle(
                                              color: Colors.white,
                                              fontSize: 17,
                                              fontWeight: FontWeight.w700,
                                            ),
                                            textAlign: TextAlign.start,
                                          ),
                                        ),
                                  // 10th School
                                  widget.showAnimations
                                      ? FutureBuilder(
                                          future: Future.delayed(
                                              Duration(milliseconds: 5200)),
                                          builder: (context, snapshot) {
                                            if (snapshot.connectionState ==
                                                ConnectionState.done) {
                                              return Container(
                                                padding: EdgeInsets.fromLTRB(
                                                    15, 0, 15, 10),
                                                child: AnimatedTextKit(
                                                  isRepeatingAnimation: false,
                                                  animatedTexts: [
                                                    TypewriterAnimatedText(
                                                      TENTH_SCHOOL,
                                                      speed: Duration(
                                                          milliseconds: 20),
                                                      textStyle: TextStyle(
                                                        color: Colors.white,
                                                        fontSize: 12,
                                                        fontWeight:
                                                            FontWeight.w700,
                                                      ),
                                                      textAlign:
                                                          TextAlign.start,
                                                    ),
                                                  ],
                                                ),
                                              );
                                            }
                                            return Container();
                                          },
                                        )
                                      : Container(
                                          padding: EdgeInsets.fromLTRB(
                                              15, 0, 15, 10),
                                          child: Text(
                                            TENTH_SCHOOL,
                                            style: TextStyle(
                                              color: Colors.white,
                                              fontSize: 12,
                                              fontWeight: FontWeight.w700,
                                            ),
                                            textAlign: TextAlign.start,
                                          ),
                                        ),
                                  // 10th Percentage
                                  widget.showAnimations
                                      ? FutureBuilder(
                                          future: Future.delayed(
                                              Duration(milliseconds: 5800)),
                                          builder: (context, snapshot) {
                                            if (snapshot.connectionState ==
                                                ConnectionState.done) {
                                              return Container(
                                                padding: EdgeInsets.fromLTRB(
                                                    15, 0, 15, 15),
                                                child: AnimatedTextKit(
                                                  isRepeatingAnimation: false,
                                                  animatedTexts: [
                                                    TypewriterAnimatedText(
                                                      TENTH_PERCENTAGE,
                                                      speed: Duration(
                                                          milliseconds: 20),
                                                      textStyle: TextStyle(
                                                        color: Colors.white,
                                                        fontSize: 11,
                                                        fontWeight:
                                                            FontWeight.w700,
                                                      ),
                                                      textAlign:
                                                          TextAlign.start,
                                                    ),
                                                  ],
                                                ),
                                              );
                                            }
                                            return Container();
                                          },
                                        )
                                      : Container(
                                          padding: EdgeInsets.fromLTRB(
                                              15, 0, 15, 15),
                                          child: Text(
                                            TENTH_PERCENTAGE,
                                            style: TextStyle(
                                              color: Colors.white,
                                              fontSize: 11,
                                              fontWeight: FontWeight.w700,
                                            ),
                                            textAlign: TextAlign.start,
                                          ),
                                        ),
                                ],
                              ),
                            ),
                          ],
                        )
                      : Column(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            // Image
                            ClipOval(
                              child: Container(
                                width: 80,
                                height: 80,
                                decoration: BoxDecoration(
                                  shape: BoxShape.circle,
                                  color: Colors.white,
                                  border: Border.all(
                                    color: Colors.blue.shade300,
                                    width: 3,
                                  ),
                                ),
                                child: Image.asset(
                                  'assets/images/education.png',
                                  fit: BoxFit.cover,
                                ),
                              ),
                            ),
                            SizedBox(height: 16),
                            // Texts
                            Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                // Degree
                                widget.showAnimations
                                    ? FutureBuilder(
                                        future: Future.delayed(
                                            Duration(milliseconds: 1000)),
                                        builder: (context, snapshot) {
                                          if (snapshot.connectionState ==
                                              ConnectionState.done) {
                                            return Container(
                                              padding: EdgeInsets.fromLTRB(
                                                  15, 15, 15, 10),
                                              child: AnimatedTextKit(
                                                isRepeatingAnimation: false,
                                                animatedTexts: [
                                                  TypewriterAnimatedText(
                                                    DEGREE,
                                                    speed: Duration(
                                                        milliseconds: 20),
                                                    textStyle: TextStyle(
                                                      color: Colors.white,
                                                      fontSize: 17,
                                                      fontWeight:
                                                          FontWeight.w700,
                                                    ),
                                                    textAlign: TextAlign.start,
                                                  ),
                                                ],
                                              ),
                                            );
                                          }
                                          return Container();
                                        },
                                      )
                                    : Container(
                                        padding:
                                            EdgeInsets.fromLTRB(15, 15, 15, 10),
                                        child: Text(
                                          DEGREE,
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontSize: 17,
                                            fontWeight: FontWeight.w700,
                                          ),
                                          textAlign: TextAlign.start,
                                        ),
                                      ),
                                // College
                                widget.showAnimations
                                    ? FutureBuilder(
                                        future: Future.delayed(
                                            Duration(milliseconds: 1600)),
                                        builder: (context, snapshot) {
                                          if (snapshot.connectionState ==
                                              ConnectionState.done) {
                                            return Container(
                                              padding: EdgeInsets.fromLTRB(
                                                  15, 0, 15, 10),
                                              child: AnimatedTextKit(
                                                isRepeatingAnimation: false,
                                                animatedTexts: [
                                                  TypewriterAnimatedText(
                                                    COLLEGE_NAME,
                                                    speed: Duration(
                                                        milliseconds: 20),
                                                    textStyle: TextStyle(
                                                      color: Colors.white,
                                                      fontSize: 12,
                                                      fontWeight:
                                                          FontWeight.w700,
                                                    ),
                                                    textAlign: TextAlign.start,
                                                  ),
                                                ],
                                              ),
                                            );
                                          }
                                          return Container();
                                        },
                                      )
                                    : Container(
                                        padding:
                                            EdgeInsets.fromLTRB(15, 0, 15, 10),
                                        child: Text(
                                          COLLEGE_NAME,
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontSize: 12,
                                            fontWeight: FontWeight.w700,
                                          ),
                                          textAlign: TextAlign.start,
                                        ),
                                      ),
                                // CGPA
                                widget.showAnimations
                                    ? FutureBuilder(
                                        future: Future.delayed(
                                            Duration(milliseconds: 2200)),
                                        builder: (context, snapshot) {
                                          if (snapshot.connectionState ==
                                              ConnectionState.done) {
                                            return Container(
                                              padding: EdgeInsets.fromLTRB(
                                                  15, 0, 15, 15),
                                              child: AnimatedTextKit(
                                                isRepeatingAnimation: false,
                                                animatedTexts: [
                                                  TypewriterAnimatedText(
                                                    CGPA,
                                                    speed: Duration(
                                                        milliseconds: 20),
                                                    textStyle: TextStyle(
                                                      color: Colors.white,
                                                      fontSize: 11,
                                                      fontWeight:
                                                          FontWeight.w700,
                                                    ),
                                                    textAlign: TextAlign.start,
                                                  ),
                                                ],
                                              ),
                                            );
                                          }
                                          return Container();
                                        },
                                      )
                                    : Container(
                                        padding:
                                            EdgeInsets.fromLTRB(15, 0, 15, 15),
                                        child: Text(
                                          CGPA,
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontSize: 11,
                                            fontWeight: FontWeight.w700,
                                          ),
                                          textAlign: TextAlign.start,
                                        ),
                                      ),
                                // 10+2 Year
                                widget.showAnimations
                                    ? FutureBuilder(
                                        future: Future.delayed(
                                            Duration(milliseconds: 2800)),
                                        builder: (context, snapshot) {
                                          if (snapshot.connectionState ==
                                              ConnectionState.done) {
                                            return Container(
                                              padding: EdgeInsets.fromLTRB(
                                                  15, 15, 15, 10),
                                              child: AnimatedTextKit(
                                                isRepeatingAnimation: false,
                                                animatedTexts: [
                                                  TypewriterAnimatedText(
                                                    "10+2 ( 2017 )",
                                                    speed: Duration(
                                                        milliseconds: 20),
                                                    textStyle: TextStyle(
                                                      color: Colors.white,
                                                      fontSize: 17,
                                                      fontWeight:
                                                          FontWeight.w700,
                                                    ),
                                                    textAlign: TextAlign.start,
                                                  ),
                                                ],
                                              ),
                                            );
                                          }
                                          return Container();
                                        },
                                      )
                                    : Container(
                                        padding:
                                            EdgeInsets.fromLTRB(15, 15, 15, 10),
                                        child: Text(
                                          "10+2 ( 2017 )",
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontSize: 17,
                                            fontWeight: FontWeight.w700,
                                          ),
                                          textAlign: TextAlign.start,
                                        ),
                                      ),
                                // 12th School
                                widget.showAnimations
                                    ? FutureBuilder(
                                        future: Future.delayed(
                                            Duration(milliseconds: 3400)),
                                        builder: (context, snapshot) {
                                          if (snapshot.connectionState ==
                                              ConnectionState.done) {
                                            return Container(
                                              padding: EdgeInsets.fromLTRB(
                                                  15, 0, 15, 10),
                                              child: AnimatedTextKit(
                                                isRepeatingAnimation: false,
                                                animatedTexts: [
                                                  TypewriterAnimatedText(
                                                    TWELVETH_SCHOOL,
                                                    speed: Duration(
                                                        milliseconds: 20),
                                                    textStyle: TextStyle(
                                                      color: Colors.white,
                                                      fontSize: 12,
                                                      fontWeight:
                                                          FontWeight.w700,
                                                    ),
                                                    textAlign: TextAlign.start,
                                                  ),
                                                ],
                                              ),
                                            );
                                          }
                                          return Container();
                                        },
                                      )
                                    : Container(
                                        padding:
                                            EdgeInsets.fromLTRB(15, 0, 15, 10),
                                        child: Text(
                                          TWELVETH_SCHOOL,
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontSize: 12,
                                            fontWeight: FontWeight.w700,
                                          ),
                                          textAlign: TextAlign.start,
                                        ),
                                      ),
                                // 12th Percentage
                                widget.showAnimations
                                    ? FutureBuilder(
                                        future: Future.delayed(
                                            Duration(milliseconds: 4000)),
                                        builder: (context, snapshot) {
                                          if (snapshot.connectionState ==
                                              ConnectionState.done) {
                                            return Container(
                                              padding: EdgeInsets.fromLTRB(
                                                  15, 0, 15, 15),
                                              child: AnimatedTextKit(
                                                isRepeatingAnimation: false,
                                                animatedTexts: [
                                                  TypewriterAnimatedText(
                                                    TWELVETH_PERCENTAGE,
                                                    speed: Duration(
                                                        milliseconds: 20),
                                                    textStyle: TextStyle(
                                                      color: Colors.white,
                                                      fontSize: 11,
                                                      fontWeight:
                                                          FontWeight.w700,
                                                    ),
                                                    textAlign: TextAlign.start,
                                                  ),
                                                ],
                                              ),
                                            );
                                          }
                                          return Container();
                                        },
                                      )
                                    : Container(
                                        padding:
                                            EdgeInsets.fromLTRB(15, 0, 15, 15),
                                        child: Text(
                                          TWELVETH_PERCENTAGE,
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontSize: 11,
                                            fontWeight: FontWeight.w700,
                                          ),
                                          textAlign: TextAlign.start,
                                        ),
                                      ),
                                // 10th Year
                                widget.showAnimations
                                    ? FutureBuilder(
                                        future: Future.delayed(
                                            Duration(milliseconds: 4600)),
                                        builder: (context, snapshot) {
                                          if (snapshot.connectionState ==
                                              ConnectionState.done) {
                                            return Container(
                                              padding: EdgeInsets.fromLTRB(
                                                  15, 15, 15, 10),
                                              child: AnimatedTextKit(
                                                isRepeatingAnimation: false,
                                                animatedTexts: [
                                                  TypewriterAnimatedText(
                                                    "10 ( 2015 )",
                                                    speed: Duration(
                                                        milliseconds: 20),
                                                    textStyle: TextStyle(
                                                      color: Colors.white,
                                                      fontSize: 17,
                                                      fontWeight:
                                                          FontWeight.w700,
                                                    ),
                                                    textAlign: TextAlign.start,
                                                  ),
                                                ],
                                              ),
                                            );
                                          }
                                          return Container();
                                        },
                                      )
                                    : Container(
                                        padding:
                                            EdgeInsets.fromLTRB(15, 15, 15, 10),
                                        child: Text(
                                          "10 ( 2015 )",
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontSize: 17,
                                            fontWeight: FontWeight.w700,
                                          ),
                                          textAlign: TextAlign.start,
                                        ),
                                      ),
                                // 10th School
                                widget.showAnimations
                                    ? FutureBuilder(
                                        future: Future.delayed(
                                            Duration(milliseconds: 5200)),
                                        builder: (context, snapshot) {
                                          if (snapshot.connectionState ==
                                              ConnectionState.done) {
                                            return Container(
                                              padding: EdgeInsets.fromLTRB(
                                                  15, 0, 15, 10),
                                              child: AnimatedTextKit(
                                                isRepeatingAnimation: false,
                                                animatedTexts: [
                                                  TypewriterAnimatedText(
                                                    TENTH_SCHOOL,
                                                    speed: Duration(
                                                        milliseconds: 20),
                                                    textStyle: TextStyle(
                                                      color: Colors.white,
                                                      fontSize: 12,
                                                      fontWeight:
                                                          FontWeight.w700,
                                                    ),
                                                    textAlign: TextAlign.start,
                                                  ),
                                                ],
                                              ),
                                            );
                                          }
                                          return Container();
                                        },
                                      )
                                    : Container(
                                        padding:
                                            EdgeInsets.fromLTRB(15, 0, 15, 10),
                                        child: Text(
                                          TENTH_SCHOOL,
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontSize: 12,
                                            fontWeight: FontWeight.w700,
                                          ),
                                          textAlign: TextAlign.start,
                                        ),
                                      ),
                                // 10th Percentage
                                widget.showAnimations
                                    ? FutureBuilder(
                                        future: Future.delayed(
                                            Duration(milliseconds: 5800)),
                                        builder: (context, snapshot) {
                                          if (snapshot.connectionState ==
                                              ConnectionState.done) {
                                            return Container(
                                              padding: EdgeInsets.fromLTRB(
                                                  15, 0, 15, 15),
                                              child: AnimatedTextKit(
                                                isRepeatingAnimation: false,
                                                animatedTexts: [
                                                  TypewriterAnimatedText(
                                                    TENTH_PERCENTAGE,
                                                    speed: Duration(
                                                        milliseconds: 20),
                                                    textStyle: TextStyle(
                                                      color: Colors.white,
                                                      fontSize: 11,
                                                      fontWeight:
                                                          FontWeight.w700,
                                                    ),
                                                    textAlign: TextAlign.start,
                                                  ),
                                                ],
                                              ),
                                            );
                                          }
                                          return Container();
                                        },
                                      )
                                    : Container(
                                        padding:
                                            EdgeInsets.fromLTRB(15, 0, 15, 15),
                                        child: Text(
                                          TENTH_PERCENTAGE,
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontSize: 11,
                                            fontWeight: FontWeight.w700,
                                          ),
                                          textAlign: TextAlign.start,
                                        ),
                                      ),
                              ],
                            ),
                          ],
                        ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
