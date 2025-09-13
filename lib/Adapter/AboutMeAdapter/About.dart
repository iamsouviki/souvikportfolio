import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';

import '../../Variable.dart';

class About extends StatefulWidget {
  final VoidCallback? onComplete;
  final bool showAnimations;

  const About({Key? key, this.onComplete, this.showAnimations = true})
      : super(key: key);

  @override
  _AboutState createState() => _AboutState();
}

class _AboutState extends State<About> with TickerProviderStateMixin {
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

    // Call onComplete after animations finish (title ~0.5s + staggered bio ~9.5s)
    Future.delayed(const Duration(seconds: 11), () {
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
                Container(
                  padding: EdgeInsets.symmetric(vertical: 8, horizontal: 4),
                  child: widget.showAnimations
                      ? AnimatedTextKit(
                          isRepeatingAnimation: false,
                          animatedTexts: [
                            TypewriterAnimatedText(
                              'Who Am I?',
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
                          'Who Am I?',
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
                Container(
                  padding: EdgeInsets.all(20),
                  child: width > 610
                      ? Row(
                          children: [
                            Flexible(
                              flex: 1,
                              child: ClipOval(
                                child: Container(
                                  width: 120,
                                  height: 120,
                                  decoration: BoxDecoration(
                                    shape: BoxShape.circle,
                                    border: Border.all(
                                        color: Colors.blue.shade300, width: 3),
                                  ),
                                  child: Image.asset(
                                    'assets/images/souvikimagepassport.jpg',
                                    fit: BoxFit.cover,
                                  ),
                                ),
                              ),
                            ),
                            SizedBox(width: 16),
                            Flexible(
                              flex: 2,
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  widget.showAnimations
                                      ? Column(
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: [
                                            FutureBuilder(
                                              future: count(1),
                                              builder: (context, snapshot) {
                                                if (snapshot.connectionState ==
                                                    ConnectionState.done) {
                                                  return Container(
                                                    padding:
                                                        EdgeInsets.fromLTRB(
                                                            15, 15, 15, 5),
                                                    child: AnimatedTextKit(
                                                      isRepeatingAnimation:
                                                          false,
                                                      animatedTexts: [
                                                        TypewriterAnimatedText(
                                                          "I am a Full Stack Android Developer with expertise in Java Spring Boot for backend development.",
                                                          speed: Duration(
                                                              milliseconds: 20),
                                                          textStyle: TextStyle(
                                                            color: Colors.white,
                                                            fontSize: 16,
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
                                            ),
                                            FutureBuilder(
                                              future: Future.delayed(
                                                  Duration(seconds: 2)),
                                              builder: (context, snapshot) {
                                                if (snapshot.connectionState ==
                                                    ConnectionState.done) {
                                                  return Container(
                                                    padding:
                                                        EdgeInsets.fromLTRB(
                                                            15, 5, 15, 5),
                                                    child: AnimatedTextKit(
                                                      isRepeatingAnimation:
                                                          false,
                                                      animatedTexts: [
                                                        TypewriterAnimatedText(
                                                          "Core Java, RESTful APIs, Flutter for cross-platform mobile apps (with a focus on Android).",
                                                          speed: Duration(
                                                              milliseconds: 20),
                                                          textStyle: TextStyle(
                                                            color: Colors.white,
                                                            fontSize: 16,
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
                                            ),
                                            FutureBuilder(
                                              future: Future.delayed(
                                                  Duration(seconds: 4)),
                                              builder: (context, snapshot) {
                                                if (snapshot.connectionState ==
                                                    ConnectionState.done) {
                                                  return Container(
                                                    padding:
                                                        EdgeInsets.fromLTRB(
                                                            15, 5, 15, 5),
                                                    child: AnimatedTextKit(
                                                      isRepeatingAnimation:
                                                          false,
                                                      animatedTexts: [
                                                        TypewriterAnimatedText(
                                                          "Native Android development using Java, MySQL database management, and Git for version control.",
                                                          speed: Duration(
                                                              milliseconds: 20),
                                                          textStyle: TextStyle(
                                                            color: Colors.white,
                                                            fontSize: 16,
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
                                            ),
                                            FutureBuilder(
                                              future: Future.delayed(
                                                  Duration(seconds: 6)),
                                              builder: (context, snapshot) {
                                                if (snapshot.connectionState ==
                                                    ConnectionState.done) {
                                                  return Container(
                                                    padding:
                                                        EdgeInsets.fromLTRB(
                                                            15, 5, 15, 5),
                                                    child: AnimatedTextKit(
                                                      isRepeatingAnimation:
                                                          false,
                                                      animatedTexts: [
                                                        TypewriterAnimatedText(
                                                          "As a Computer Science graduate and System Engineer at Tata Consultancy Services (TCS), I am passionate about creating high-performance solutions and enjoy exploring new technologies.",
                                                          speed: Duration(
                                                              milliseconds: 20),
                                                          textStyle: TextStyle(
                                                            color: Colors.white,
                                                            fontSize: 16,
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
                                            ),
                                            FutureBuilder(
                                              future: Future.delayed(
                                                  Duration(seconds: 8)),
                                              builder: (context, snapshot) {
                                                if (snapshot.connectionState ==
                                                    ConnectionState.done) {
                                                  return Container(
                                                    padding:
                                                        EdgeInsets.fromLTRB(
                                                            15, 5, 15, 15),
                                                    child: AnimatedTextKit(
                                                      isRepeatingAnimation:
                                                          false,
                                                      animatedTexts: [
                                                        TypewriterAnimatedText(
                                                          "Outside of programming, I enjoy playing cricket and watching matches with a cup of coffee.",
                                                          speed: Duration(
                                                              milliseconds: 20),
                                                          textStyle: TextStyle(
                                                            color: Colors.white,
                                                            fontSize: 16,
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
                                            ),
                                          ],
                                        )
                                      : Container(
                                          padding: EdgeInsets.fromLTRB(
                                              15, 15, 15, 15),
                                          child: Text(
                                            WHO_AM_I,
                                            style: TextStyle(
                                              color: Colors.white,
                                              fontSize: 16,
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
                            ClipOval(
                              child: Container(
                                width: 100,
                                height: 100,
                                decoration: BoxDecoration(
                                  shape: BoxShape.circle,
                                  border: Border.all(
                                      color: Colors.blue.shade300, width: 3),
                                ),
                                child: Image.asset(
                                  'assets/images/souvikimagepassport.jpg',
                                  fit: BoxFit.cover,
                                ),
                              ),
                            ),
                            SizedBox(height: 16),
                            Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                widget.showAnimations
                                    ? Column(
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                            FutureBuilder(
                                              future: count(1),
                                              builder: (context, snapshot) {
                                                if (snapshot.connectionState ==
                                                    ConnectionState.done) {
                                                  return Container(
                                                    padding:
                                                        EdgeInsets.fromLTRB(
                                                            15, 15, 15, 5),
                                                    child: AnimatedTextKit(
                                                      isRepeatingAnimation:
                                                          false,
                                                      animatedTexts: [
                                                        TypewriterAnimatedText(
                                                          "I am a Full Stack Android Developer with expertise in Java Spring Boot for backend development.",
                                                          speed: Duration(
                                                              milliseconds: 20),
                                                          textStyle: TextStyle(
                                                            color: Colors.white,
                                                            fontSize: 16,
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
                                            ),
                                            FutureBuilder(
                                              future: Future.delayed(
                                                  Duration(seconds: 2)),
                                              builder: (context, snapshot) {
                                                if (snapshot.connectionState ==
                                                    ConnectionState.done) {
                                                  return Container(
                                                    padding:
                                                        EdgeInsets.fromLTRB(
                                                            15, 5, 15, 5),
                                                    child: AnimatedTextKit(
                                                      isRepeatingAnimation:
                                                          false,
                                                      animatedTexts: [
                                                        TypewriterAnimatedText(
                                                          "Core Java, RESTful APIs, Flutter for cross-platform mobile apps (with a focus on Android).",
                                                          speed: Duration(
                                                              milliseconds: 20),
                                                          textStyle: TextStyle(
                                                            color: Colors.white,
                                                            fontSize: 16,
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
                                            ),
                                            FutureBuilder(
                                              future: Future.delayed(
                                                  Duration(seconds: 4)),
                                              builder: (context, snapshot) {
                                                if (snapshot.connectionState ==
                                                    ConnectionState.done) {
                                                  return Container(
                                                    padding:
                                                        EdgeInsets.fromLTRB(
                                                            15, 5, 15, 5),
                                                    child: AnimatedTextKit(
                                                        isRepeatingAnimation:
                                                            false,
                                                        animatedTexts: [
                                                          TypewriterAnimatedText(
                                                            "Native Android development using Java, MySQL database management, and Git for version control.",
                                                            speed: Duration(
                                                                milliseconds:
                                                                    20),
                                                            textStyle:
                                                                TextStyle(
                                                              color:
                                                                  Colors.white,
                                                              fontSize: 16,
                                                              fontWeight:
                                                                  FontWeight
                                                                      .w700,
                                                            ),
                                                            textAlign:
                                                                TextAlign.start,
                                                          )
                                                        ]),
                                                  );
                                                }
                                                return Container();
                                              },
                                            ),
                                            FutureBuilder(
                                              future: Future.delayed(
                                                  Duration(seconds: 6)),
                                              builder: (context, snapshot) {
                                                if (snapshot.connectionState ==
                                                    ConnectionState.done) {
                                                  return Container(
                                                      padding:
                                                          EdgeInsets.fromLTRB(
                                                              15, 5, 15, 5),
                                                      child: AnimatedTextKit(
                                                          isRepeatingAnimation:
                                                              false,
                                                          animatedTexts: [
                                                            TypewriterAnimatedText(
                                                              "As a Computer Science graduate and System Engineer at Tata Consultancy Services (TCS), I am passionate about creating high-performance solutions and enjoy exploring new technologies.",
                                                              speed: Duration(
                                                                  milliseconds:
                                                                      20),
                                                              textStyle:
                                                                  TextStyle(
                                                                color: Colors
                                                                    .white,
                                                                fontSize: 16,
                                                                fontWeight:
                                                                    FontWeight
                                                                        .w700,
                                                              ),
                                                              textAlign:
                                                                  TextAlign
                                                                      .start,
                                                            ),
                                                          ]));
                                                }
                                                return Container();
                                              },
                                            ),
                                            FutureBuilder(
                                              future: Future.delayed(
                                                  Duration(seconds: 8)),
                                              builder: (context, snapshot) {
                                                if (snapshot.connectionState ==
                                                    ConnectionState.done) {
                                                  return Container(
                                                    padding:
                                                        EdgeInsets.fromLTRB(
                                                            15, 5, 15, 15),
                                                    child: AnimatedTextKit(
                                                        isRepeatingAnimation:
                                                            false,
                                                        animatedTexts: [
                                                          TypewriterAnimatedText(
                                                            "Outside of programming, I enjoy playing cricket and watching matches with a cup of coffee.",
                                                            speed: Duration(
                                                                milliseconds:
                                                                    20),
                                                            textStyle:
                                                                TextStyle(
                                                              color:
                                                                  Colors.white,
                                                              fontSize: 16,
                                                              fontWeight:
                                                                  FontWeight
                                                                      .w700,
                                                            ),
                                                            textAlign:
                                                                TextAlign.start,
                                                          ),
                                                        ]),
                                                  );
                                                }
                                                return Container();
                                              },
                                            ),
                                          ])
                                    : Container(
                                        padding:
                                            EdgeInsets.fromLTRB(15, 15, 15, 15),
                                        child: Text(
                                          WHO_AM_I,
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontSize: 16,
                                            fontWeight: FontWeight.w700,
                                          ),
                                          textAlign: TextAlign.start,
                                        ),
                                      )
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
